"use client";
import { deleteTemplate, getTemplate, postTemplate } from "@/shared/api/client";
import { User } from "../model/types";
import { Fields } from "@/widgets/profile/store/profileStore";

export const fetchUserData = async (): Promise<User> => {
  const response = await getTemplate("/employee/get_employee_data");
  return response.data as User;
};
export const fetchUserPoints = async () => {
  const response = await getTemplate("/employee/get_points");
  const data = response.data as { points: number };
  return data.points as number;
};
export const fetchAllUsers = async () => {
  const response = await getTemplate("/manager/get/employee");
  const data = response.data as { employees: User[] };
  console.log(data);
  
  return data.employees as User[];
}

export type FlatData<T> = {
  [K in keyof T]: T[K];
};
export const addWorkerQuery = async (data: Omit<Fields, "jobTitleId">) => {
  const response = await postTemplate("/admin/add/employee", data);
  if(response.status === 200) {
    return true;
  } else {
    throw new Error("Failed to add worker");
  }
}
export const updateWorkerQuery = async (data: Omit<Fields, "password" | "jobTitleId">) => {
  const response = await postTemplate("/admin/update/employee", data);
  if(response.status === 200) {
    return true;
  } else {
    throw new Error("Failed to update worker");
  }
}
export const deleteWorker = async (id:string) => {
  const response = await deleteTemplate(`/admin/delete/employee/${id}`);
  if(response.status === 200) {
    return true;
  } else {
    throw new Error("Failed to delete worker");
  }
}
