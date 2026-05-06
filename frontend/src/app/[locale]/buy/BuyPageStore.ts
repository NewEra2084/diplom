import { postTemplate } from "@/shared/api/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CompanyNullable,
  Admin,
  AdminNotNullable,
  Company,
  CompanyActions,
} from "./types";

export const useBuyStore = create<CompanyNullable & CompanyActions>()(
  persist(
    (set, get) => ({
      name: null,
      address: null,
      fieldOfEmployment: null,
      subscribeFireDate: null,
      admin: {
        email: "",
        firstName: "",
        lastName: "",
        patronymic: "",
        login: "",
        password: "",
      },

      setCompanyData: ({
        name,
        address,
        fieldOfEmployment,
        subscribeFireDate,
      }: Company) => {
        set((prev) => ({
          ...prev,
          name,
          address,
          fieldOfEmployment,
          subscribeFireDate,
        }));
      },
      setCompanyField: (value, field) => {
        set((prev) => ({ ...prev, [field]:value }));
      },
      setAdmin: (admin) => {
        set((prev) => ({ ...prev, admin }));
      },
      setAdminField: (value, field) => {
        set((prev) => ({ ...prev, admin: { ...prev.admin, [field]: value } }));
      },

      getData: () => get(),

      companyCreate: async (
        { address, fieldOfEmployment, name, subscribeFireDate }: Company,
        admin: Admin,
      ) => {
        postTemplate("/company/create", {
          address,
          name,
          subscribeFireDate,
          fieldOfEmployment,
          admin,
        });
      },
    }),
    {
      name: "createCompanyInfo",
      partialize: (state) => ({
        name: state.name,
        address: state.address,
        fieldOfEmployment: state.fieldOfEmployment,
        subscribeFireDate: state.subscribeFireDate,
        admin: state.admin,
      }),
    },
  ),
);
