"use client";
import { roles } from "@/entities/User/model/types";
import { useRouter } from "@/i18n/navigation";
import { getTemplate } from "@/shared/api/client";
import { useEffect } from "react";

export const useAuthGuard = (roles: roles) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/auth");
      return;
    }
    (async () => {
      const employee = await getTemplate("/employee/get_employee_data");
      if (!roles.includes(employee.data?.rolesName[0])) {
        router.push("/");
      }
    })();
  });
};
