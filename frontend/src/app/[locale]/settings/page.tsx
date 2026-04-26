"use client"
import { useAuthGuard } from "@/features/authMiddleware/useAuthGuard";
import { SettingsPage } from "@/routes/settings";
import { ReactNode } from "react";

export default function Page({children}:{children:ReactNode}) {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);
  return (
    <SettingsPage/>
  )
}