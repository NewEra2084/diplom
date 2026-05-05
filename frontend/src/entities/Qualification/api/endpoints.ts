import { getTemplate } from "@/shared/api/client";
import { Qualification } from "../model/types";

export const getQualifications = async () => {
  const { data, status } = await getTemplate<Qualification[]>(
    "/manager/get/qualification",
  );
  if (status >= 400) {
    return;
  }
  return data;
};