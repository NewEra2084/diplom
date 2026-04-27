import { redirect } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function SettingsPage () {
  redirect({href: "/settings/appearance", locale:useLocale()});
  return (
    null
  );
};
