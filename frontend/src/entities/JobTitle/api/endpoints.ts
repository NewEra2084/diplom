import { getTemplate } from "@/shared/api/client";
import { JobTitle } from "../model/types";

export const getJobTitles = async () => {
  const { data, status } = await getTemplate<JobTitle[]>(
    "/manager/get/job_title",
  );
  if (status >= 400) {
    return null;
  }
  return data;
};