"use client";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { UserStore } from "@/entities/User/model/store";
import { lazy, Suspense, useEffect } from "react";
import { CompanyData } from "@/widgets/profileCompany/CompanyData";

const UserData = lazy(() =>
  import("@/widgets/profile/UserData").then((module) => ({
    default: module.UserData,
  })),
);

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);

  const getPoints = UserStore((state) => state.getPoints);
  const getUserData = UserStore((state) => state.getUser);

  useEffect(() => {
    getPoints();
    getUserData();
  }, [getPoints, getUserData]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UserData />
      </Suspense>
      <CompanyData />
    </>
  );
}
