"use client";
import { getTemplate } from "@/shared/api/client";
import { User } from "../model/types";

export const fetchUserData = async (): Promise<User> => {
  const response = await getTemplate("/employee/get_employee_data");
  return response.data as User;
};
export const fetchUserPoints = async () => {
  const response = await getTemplate("/employee/get_points");
  const data = response.data as { points: number };
  return data.points as number;
};
