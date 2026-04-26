"use client"
import { User } from "@/entities/user/types";
import { Column } from "./Navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  userData: User;
  item: Column;
};
type ProfileProps = {
  logout: () => void;
};

export const NavListItem = ({ item, userData }: Props) => {  
  const t = useTranslations('Header');
  return (
    <ul className="lg:absolute top-20 text-accent lg:text-main text-md left-0 mt-2 divide-x-2 lg:divide-none w-full flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-secondary lg:border-4 lg:border-accent/50 lg:hover:border-accent/30">
      {item.pages.map(
        (page, pageIdx) =>
          page.roles.includes(userData.rolesName[0]) && (
            <li
            key={pageIdx}
            className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg"
            >
              <a href={page.path} className="text-lg">{t(page.name)}</a>
            </li>
          ),
        )}
    </ul>
  );
};
NavListItem.Profile = function Profile({ logout }: ProfileProps) {
  const t = useTranslations('Header');
  return (
    <ul className="lg:absolute top-20 text-lg text-accent lg:text-main divide-x-2 lg:divide-none left-0 mt-2 w-full flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-secondary lg:border-4 lg:border-accent/50 lg:hover:border-accent/30">
      <li className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
        <Link href={"/profile"}>{t('profile')}</Link>
      </li>
      <li className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
        <Link href={"/settings"}>{t('settings')}</Link>
      </li>
      <li className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
        <Link onClick={logout} href={"/auth"}>
          {t('logout')}
        </Link>
      </li>
    </ul>
  );
};
