"use client";
import { redirect } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function TasksPage () {
  redirect({href: "/tasks/active", locale:useLocale()});
  return (
    null
  );
};