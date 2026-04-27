"use client"
import { useAuthGuard } from "@/features/authMiddleware/useAuthGuard";
import { SettingsPageLayout } from "@/routes/settings";
import { ReactNode } from "react";

export default function Page({children}:{children:ReactNode}) {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);
  return (
    <SettingsPageLayout>{children}</SettingsPageLayout>
  )
}