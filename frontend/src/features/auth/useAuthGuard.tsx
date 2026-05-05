"use client";
import { roles } from "@/entities/User/model/types";
import { getTemplate } from "@/shared/api/client";
import { useEffect } from "react";

export const useAuthGuard = (roles: roles) => {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/auth";
      return;
    }
    (async () => {
      const employee = await getTemplate("/employee/get_employee_data");
      if (!roles.includes(employee.data?.rolesName[0])) {
        window.location.href = "/";
      }
    })();
  });
};
