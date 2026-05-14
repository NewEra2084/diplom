"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ReactNode } from "react";

const elements = [
  { name: "Активные задачи", id: 0, link: "active" },
  { name: "Неактивные задачи", id: 1, link: "archive" },
  { name: "Запросы на выполнение", id: 2, link: "requests" },
];

export default function Page({ children }: { children: ReactNode }) {
  useAuthGuard(["ROLE_EMPLOYEE"]);
  const { asideIsOpen, viewport } = useLayoutState();
  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Задачи" elements={elements} />
      {((viewport < 800 && !asideIsOpen) || viewport >= 800) && (
        <Body>{children}</Body>
      )}
    </div>
  );
}
