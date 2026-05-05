export type roles = ("ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER")[];
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
  setUser: (data: User) => void;
  getUser: () => User;
  setPoints: (data: number) => void;
  getPoints: () => number;
  logout: () => void;
};
