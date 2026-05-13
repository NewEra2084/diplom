import {
  deleteTemplate,
  getTemplate,
  postTemplate,
  putTemplate,
} from "@/shared/api/client";
import { Project } from "../model/types";

export const getProjects = async () : Promise<Project[] | null> => {
  const { data, status } = await getTemplate("/project/get");
  if (status >= 400) {
    return null;
  }
  return data as Project[];
};
export const getProjectsWithTasks = async () => {
  const { data, status } = await getTemplate("/project/get/with_tasks");
  if (status >= 400) {
    return null;
  }
  return data;
};
export const addProject = async (project: Omit<Project, "id" | "tasks">) => {
  const { data, status } = await postTemplate(`/project/add`, project);
  if (status >= 400) {
    return null;
  }
  
  return true;
};
export const updateProject = async (project: Omit<Project, "tasks">) => {
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
  return true;
};
