"use client";
import { getTemplate } from "@/shared/api/client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function PreviewPage() {
  const t = useTranslations('HomePage');
  useEffect(() => {
    (async () => {
      await getTemplate("/employee/get_employee_data");
    })();
  });
  return <div>{t('title')}</div>;
}
