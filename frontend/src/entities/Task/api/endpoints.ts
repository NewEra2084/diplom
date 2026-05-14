import {
  deleteTemplate,
  getTemplate,
  patchTemplate,
  postMultyPartTemplate,
  postTemplate,
  putTemplate,
} from "@/shared/api/client";
import { Category, Task, TaskReport } from "../model/types";
import { User } from "@/entities/User/model/types";
import { Project } from "@/entities/Project/model/types";

export const getTasks = async () => {
  const { data, status } = await getTemplate("/task/get");
  if (status >= 400) {
    return null;
  }
  return data;
};
export const addTask = async (task: Omit<Task, "id">) => {
  const { data, status } = await postTemplate("/task/add", task);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const updateTask = async (task: Task) => {
  const { data, status } = await putTemplate(`/task/update`, task);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const deleteTask = async (taskId: string) => {
  const { data, status } = await deleteTemplate(`/task/delete/${taskId}`);
  if (status >= 400) {
    return null;
  }
  return data;
};

export const employeeTakeTask = async (taskId: string) => {
  const { data, status } = await postTemplate(`/task/employee/take/${taskId}`);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const employeeSendTask = async (task: FormData) => {
  const { data, status } = await postMultyPartTemplate(
    `/task/employee/send/report`,
    task,
  );
  if (status >= 400) {
    return null;
  }
  return true;
};
export const employeeGetTasks = async () => {
  const { data, status } = await getTemplate(`/task/employee/get_all_tasks`);
  if (status >= 400) {
    return null;
  }
  return data as {
    id: string;
    name: string;
    description: string;
    numberOfPoints: number;
    deadline: string;
    category: Pick<Category, "id" | "name" | "description">;
    status: string;
    project: Pick<Project, "id" | "name" | "description">;
  }[];
};
export const employeeGetRequests = async () => {
  const { data, status } = await getTemplate(`/task/employee/get_all_requests`);
  if (status >= 400) {
    return null;
  }
  return data as {
    id: string;
    status: string;
    executor: User;
    task: Task;
    comment: string;
  }[];
};
export const managerGetRequests = async () => {
  const { data, status } = await getTemplate(`/task/report/get`);
  if (status >= 400) {
    return null;
  }
  return data;
};
export const getTaskRequests = async () => {
  const { data, status } = await getTemplate(
    "/task/requests/get_execution_requests",
  );
  if (status >= 400) {
    return null;
  }
  return data as {
    id: string;
    status: string;
    executor: Partial<User>;
    task: Task;
  }[];
};
export const getTaskReports = async () => {
  const { data, status } = await getTemplate("/task/report/get");
  if (status >= 400) {
    return null;
  }
  return data as {
    id: string;
    title: string;
    description: string;
    status: string;
    project: Omit<Project, "tasks" | "managerId">;
    files: string[];
  }[];
};
export const acceptTaskReport = async (reportId: string) => {
  const { status } = await patchTemplate(`/task/report/accept/${reportId}`);
  if (status >= 400) {
    return null;
  }
  return true;
};
export const acceptTaskRequest = async (requestId: string) => {
  const { status } = await patchTemplate(
    `/task/requests/accept_execution_request/${requestId}`,
  );
  if (status >= 400) {
    return null;
  }
  return true;
};
export const rejectTaskRequest = async (requestId: string, comm: string) => {
  const { status } = await patchTemplate(
    `/task/requests/reject_execution_request/${requestId}`,
    { comment: comm },
  );
  if (status >= 400) {
    return null;
  }
  return true;
};
export const rejectTaskReport = async (reportId: string) => {
  const { status } = await patchTemplate(`/task/report/reject/${reportId}`);
  if (status >= 400) {
    return null;
  }
  return true;
};

export const getTaskCategories = async () => {
  const { data, status } = await getTemplate("/task/get/task_categories");
  if (status >= 400) {
    return null;
  }
  return data as { name: string; description: string }[];
};
export const addTaskCategory = async (category: {
  name: string;
  description: string;
}) => {
  const { data, status } = await postTemplate(
    "/task/add_task_category",
    category,
  );
  if (status >= 400) {
    return null;
  }
  return data as { name: string; description: string }[];
};
