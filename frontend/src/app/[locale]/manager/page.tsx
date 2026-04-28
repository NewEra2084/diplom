import { redirect } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function SettingsPage () {
  redirect({href: "/manager/null", locale:useLocale()});
  return (
    null
  );
};
