"use client";
import { useAuthGuard } from "@/features/authMiddleware/useAuthGuard";
import { useUserStore } from "@/entities/user/model/store";
import { useEffect } from "react";
import { UserData } from "@/widgets/profile/UserData";
import { CompanyData } from "@/widgets/profileCompany/CompanyData";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);

  const getPoints = useUserStore((state) => state.getPoints);

  const getUserData = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    getPoints();
    getUserData();
  }, [getPoints, getUserData]);
  return (
    <>
      <UserData />
      <CompanyData />
    </>
  );
}
