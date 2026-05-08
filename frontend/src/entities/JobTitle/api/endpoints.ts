import { deleteTemplate, getTemplate, postTemplate } from "@/shared/api/client";
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

export const addJob = async (name: string, description: string) => {
  const response = await postTemplate(`/admin/add/job_title`, {
    name,
    description,
  });
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("Failed to add job");
  }
};
export const deleteJob = async (id: string) => {
  const response = await deleteTemplate(`/admin/delete/job_title/${id}`);
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("Failed to delete job");
  }
};
