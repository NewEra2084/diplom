import { getTemplate } from "./client";

export type JobTitle = {
  id: string;
  name: string;
  description: string;
};

export const getJobTitles = async () => {
  const { data, status } = await getTemplate<JobTitle[]>(
    "/manager/get/job_title",
  );
  if (status >= 400) {
    return null;
  }
  return data;
};
