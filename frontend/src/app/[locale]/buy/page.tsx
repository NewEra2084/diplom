"use client"
import { UserStore } from "@/entities/User/model/store";
import { redirect } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function BuyPage () {
  const userData = UserStore(state=>state.user);
  const locale = useLocale()
  if(userData?.login !== undefined){
    redirect({href:"/", locale:locale})
  }
  redirect({href: "/buy/preview", locale:locale});
  return (
    null
  );
};
