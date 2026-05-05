/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { jobIdFromName } from "../utils";
import { getJobTitles } from "../../api/endpoints";

vi.mock("../../api/endpoints", () => ({
  getJobTitles: vi.fn(),
}));

describe("jobIdFromName", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockJobTitles = [
    { id: "1", name: "Разработчик", description: "Разрабатывает ПО" },
    { id: "2", name: "Тестировщик", description: "Тестирует ПО" },
    { id: "3", name: "Менеджер", description: "Управляет командой" },
  ];

  it("должна вернуть id существующей должности", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(mockJobTitles);

    const result = await jobIdFromName("Разработчик");

    expect(result).toBe("1");
    expect(getJobTitles).toHaveBeenCalledTimes(1);
  });

  it("должна вернуть id для должности с точным совпадением имени", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(mockJobTitles);

    const result = await jobIdFromName("Тестировщик");

    expect(result).toBe("2");
  });

  it("должна выбросить ошибку, если должность не найдена", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(mockJobTitles);

    await expect(jobIdFromName("НесуществующаяДолжность")).rejects.toThrow();
  });

  it("должна выбросить ошибку, если getJobTitles вернул null", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(null);

    await expect(jobIdFromName("Разработчик")).rejects.toThrow();
  });

  it("должна выбросить ошибку, если getJobTitles вернул undefined", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(undefined as any);

    await expect(jobIdFromName("Разработчик")).rejects.toThrow();
  });

  it("должна выбросить ошибку, если массив пустой", async () => {
    vi.mocked(getJobTitles).mockResolvedValue([]);

    await expect(jobIdFromName("Разработчик")).rejects.toThrow();
  });

  it("должна искать по точному совпадению строки (чувствительность к регистру)", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(mockJobTitles);

    await expect(jobIdFromName("разработчик")).rejects.toThrow();
  });

  it("должна корректно обрабатывать пустую строку в name", async () => {
    vi.mocked(getJobTitles).mockResolvedValue(mockJobTitles);

    await expect(jobIdFromName("")).rejects.toThrow();
  });
});
