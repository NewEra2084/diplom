"use client"
import { useAuthGuard } from "@/features/authMiddleware/useAuthGuard";
import { SettingsPage } from "@/routes/settings";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);
  return (
    <SettingsPage/>
  )
}