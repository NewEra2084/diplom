import { User } from "@/entities/user/types";

export type Admin = {
  [K in keyof Pick<
    User,
    "login" | "email" | "firstName" | "lastName" | "patronymic" | "password"
  >]?: User[K] | null;
};

export interface Company {
  name: string;
  address: string;
  fieldOfEmployment: string;
  subscribeFireDate: Date;
  admin: Admin;
}

export type CompanyNullable = {
  [K in keyof Company]: K extends "admin" ? Admin : Company[K] | null;
};
export type AdminNotNullable = {
  [K in keyof Admin]-?: NonNullable<Admin[K]>;
};
