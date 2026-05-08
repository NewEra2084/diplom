import {
  deleteTemplate,
  getTemplate,
  postTemplate,
  putTemplate,
} from "@/shared/api/client";
import { Project } from "../model/types";

export const getProjects = async () => {
  const { data, status } = await getTemplate("/project/get");
  if (status >= 400) {
    return null;
  }
  return data;
};
export const getProjectsWithTasks = async () => {
  const { data, status } = await getTemplate("/project/get/with_tasks");
  if (status >= 400) {
    return null;
  }
  return data;
};
export const addProject = async (project: Omit<Project, "id">) => {
  const { data, status } = await postTemplate(`/project/add`, project);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const updateProject = async (project: Project) => {
  const { data, status } = await putTemplate(`/project/update`, project);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const deleteProject = async (projectId: string) => {
  const { data, status } = await deleteTemplate(`/project/delete/${projectId}`);
  if (status >= 400) {
    return null;
  }
  return data;
};
