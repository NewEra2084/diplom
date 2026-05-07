"use client";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { UserData } from "@/widgets/profile/UserData";
import { CompanyData } from "@/widgets/profileCompany/CompanyData";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);
  return (
    <>
      <UserData editable={true}/>
      <CompanyData />
    </>
  );
}
