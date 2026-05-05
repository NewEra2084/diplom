import { postTemplate } from "@/shared/api/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CompanyNullable, Admin, AdminNotNullable, Company } from "./types";

export const useBuyStore = create<CompanyNullable>()(
  persist(
    (set, get) => ({
      name: null,
      address: null,
      fieldOfEmployment: null,
      subscribeFireDate: null,
      admin: {
        email: null,
        firstName: null,
        lastName: null,
        patronymic: null,
        login: null,
        password: null,
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
      setAdmin: (admin: NonNullable<AdminNotNullable>) => {
        set((prev) => ({ ...prev, admin }));
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
