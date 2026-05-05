export type roles = role[];
export type role = "ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER";

export type User = {
  id: string;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  patronymic: string;
  jobTitleName: string;
  qualificationName: string;
  rolesName: Array<"ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER">;
};

export type useUser = {
  user: User | null;
  points: number;
  setUser: () => void;
  getUser: () => User;
  setPoints: () => void;
  getPoints: () => number;
  logout: () => void;
};
