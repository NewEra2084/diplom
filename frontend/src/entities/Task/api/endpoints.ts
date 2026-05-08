import { deleteTemplate, getTemplate, postTemplate, putTemplate } from "@/shared/api/client";
import { Task, TaskReport } from "../model/types";

export const getTasks = async () => {
  const { data, status } = await getTemplate("/task/get");
  if (status >= 400) {
    return null;
  }
  return data;
};
export const addTask = async (task: Omit<Task,"id">) => {
  const { data, status } = await postTemplate("/task/add", task);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const updateTask = async (task:Task) => {
  const { data, status } = await putTemplate(`/task/update`, task);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const deleteTask = async (taskId:number) => {
  const { data, status } = await deleteTemplate(`/task/delete/${taskId}`);
  if (status >= 400) {
    return null;
  }
  return data;
};

export const employeeTakeTask = async (taskId:number) => {
  const { data, status } = await postTemplate(`/task/employee/take/${taskId}`);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const employeeSendTask = async (task:TaskReport) => {
  const { data, status } = await postTemplate(`/task/employee/send/report`, task);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const employeeGetTasks = async () => {
  const { data, status } = await getTemplate(`/task/employee/get_all_tasks`);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const employeeGetRequests = async () => {
  const { data, status } = await getTemplate(`/task/employee/get_all_requests`);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const managerGetRequests = async () => {
  const { data, status } = await getTemplate(`/task/report/get`);
  if (status >= 400) {
    return null;
  }
  return data;
};



export const getTaskCategories = async () => {
  const { data, status } = await getTemplate("/task/get/task_categories");
  if (status >= 400) {
    return null;
  }
  return data;
};