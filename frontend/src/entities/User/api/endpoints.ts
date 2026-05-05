import { getTemplate } from "@/shared/api/client";
import { User } from "../model/types";
import { UserStore } from "../model/store";

export const fetchUserData = async (): Promise<void> => {
  const setUser = UserStore((state) => state.setUser);

  const response = await getTemplate("/employee/get_employee_data");
  const data = response.data as User;
  setUser(data);
};
export const fetchUserPoints = async () => {
  const setPoints = UserStore((state) => state.setPoints);
  const response = await getTemplate("/employee/get_points");
  const data = response.data as { points: number };
  setPoints(data.points);
};
