"use client";
import { User } from "@/entities/User/model/types";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { HeaderStore } from "../store/HeaderStore";
import { Column } from "../store/types";

type Props = {
  userData: User;
  item: Column;
};
type ProfileProps = {
  logout: () => void;
};

export const NavListItem = ({ item, userData }: Props) => {
  const t = useTranslations("Header");

  const setIsOpen = HeaderStore((store) => store.setIsOpen);
  return (
    <ul
      className="lg:absolute z-100 top-20 whitespace-nowrap px-2 text-accent dark:text-dark-accent
dark:lg:text-dark-accent lg:text-main w-fit text-md left-[50%] translate-x-[-50%] mt-2 divide-x-2 lg:divide-none flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-main lg:border-4 lg:border-accent/50 lg:hover:border-accent/30 dark:lg:border-dark-accent/50 dark:lg:hover:border-dark-accent/30"
    >
      {item.pages.map(
        (page, pageIdx) =>
          page.roles.includes(userData.rolesName[0]) && (
            <Link
              key={pageIdx}
              href={page.path}
              className="text-lg"
              onClick={() => setIsOpen({ is: false, column: null })}
            >
              <li className="hover:bg-accent pr-3 dark:hover:bg-dark-secondary dark:lg:hover:bg-dark-secondary/50 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
                {t(page.name)}
              </li>
            </Link>
          ),
      )}
    </ul>
  );
};
NavListItem.Profile = function Profile({ logout }: ProfileProps) {
  const t = useTranslations("Header");
  const router = useRouter();
  const setIsOpen = HeaderStore((store) => store.setIsOpen);
  return (
    <ul
      className="lg:absolute z-100 top-20 whitespace-nowrap px-2 text-accent dark:text-dark-accent
dark:lg:text-dark-accent lg:text-main w-fit text-md left-[50%] translate-x-[-50%] mt-2 divide-x-2 lg:divide-none flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-main lg:border-4 lg:border-accent/50 lg:hover:border-accent/30 dark:lg:border-dark-accent/50 dark:lg:hover:border-dark-accent/30"
    >
      <Link
        href={"/profile"}
        onClick={() => setIsOpen({ is: false, column: null })}
      >
        <li className="hover:bg-accent dark:hover:bg-dark-secondary dark:lg:hover:bg-dark-secondary/50 pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
          {t("profile")}
        </li>
      </Link>
      <Link
        href={"/settings/appearance"}
        onClick={() => setIsOpen({ is: false, column: null })}
      >
        <li className="hover:bg-accent dark:hover:bg-dark-secondary dark:lg:hover:bg-dark-secondary/50 pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
          {t("settings")}
        </li>
      </Link>
      <Link
        href={"/auth"}
        onClick={() => {
          logout();
          router.push({ pathname: "/auth" });
          setIsOpen({ is: false, column: null });
        }}
      >
        <li className="hover:bg-accent dark:hover:bg-dark-secondary dark:lg:hover:bg-dark-secondary/50 pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
          {t("logout")}
        </li>
      </Link>
    </ul>
  );
};
