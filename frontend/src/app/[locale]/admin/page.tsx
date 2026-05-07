"use client";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { redirect } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function SettingsPage() {
  useAuthGuard(["ROLE_ADMIN"]);
  redirect({ href: "/admin/workers", locale: useLocale() });
  return null;
}
