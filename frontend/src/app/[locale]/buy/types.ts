import { User } from "@/entities/User/model/types";

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
  subscribeFireDate: string;
  admin: Admin;
}
export interface CompanyActions {
  setCompanyData: ({
    name,
    address,
    fieldOfEmployment,
    subscribeFireDate,
  }: Company) => void;
  setAdmin: (admin: NonNullable<AdminNotNullable>) => void;
  setAdminField: (value: string, field: keyof Admin) => void;
  setCompanyField: (value: string, field: keyof Omit<Company, "admin">) => void;
  companyCreate: (
    { address, fieldOfEmployment, name, subscribeFireDate }: Company,
    admin: Admin,
  ) => Promise<void>;
}

export type CompanyNullable = {
  [K in keyof Company]: K extends "admin" ? Admin : Company[K] | null;
};
export type AdminNotNullable = {
  [K in keyof Admin]-?: NonNullable<Admin[K]>;
};
