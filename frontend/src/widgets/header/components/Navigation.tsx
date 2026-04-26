import { useUserStore } from "@/entities/user/model/store";
import { roles, User } from "@/entities/user/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavListItem } from "./NavListItem";
import { useTranslations } from "next-intl";

export type Props = {
  className?: string;
};
export type Page = { path: string; name: string; roles: roles };
export type Column = {
  title: string;
  pages: Page[];
  roles?: roles;
};

export const columns: Column[] = [
  {
    title: "tasks",
    pages: [
      { path: "/MyTasks", name: "my tasks", roles: ["ROLE_EMPLOYEE"] },
      {
        path: "/AllTasks",
        name: "all tasks",
        roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
      },
    ],
    roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
  },
  {
    title: "projects",
    pages: [
      {
        path: "/MyProjects",
        name: "my projects",
        roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
      },
      { path: "/AllProjects", name: "all projects", roles: ["ROLE_MANAGER"] },
    ],
    roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
  },
  {
    title: "panel",
    pages: [
      {
        path: "/ManagerPanel",
        name: "manager",
        roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
      },
      { path: "/AdminPanel", name: "admin", roles: ["ROLE_ADMIN"] },
    ],
    roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
  },
];

export const Navigation = ({ className }: Props) => {
  const userData = useUserStore((store) => store.user);
  const fetchUsers = useUserStore((user) => user.fetchUser);
  const t = useTranslations('Header');
  const logout = useUserStore((store) => store.logout);
  // Храним только ID открытого пункта, а не массив статусов
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  useEffect(()=>{
    fetchUsers();
  },[fetchUsers])

  const toggleItem = (title: string) => {
    setOpenItemId((prev) => (prev === title ? null : title));
  };

  return (
    <nav className={`${className} lg:pl-5 items-center text-2xl lg:text-lg w-full flex-col lg:flex-row`}>
      <ul className={`flex items-center gap-6`}>
        {columns.map(
          (item, idx) =>
            userData &&
            item.roles?.includes(userData.rolesName[0]) && (
              <li
                className="relative p-5 hover:bg-accent/50 cursor-pointer"
                key={idx}
                onClick={() => toggleItem(t(item.title))}
              >
                {t(item.title)}
                {openItemId === t(item.title) && (
                  <NavListItem userData={userData} item={item} />
                )}
              </li>
            ),
        )}
      </ul>
      <div
        className="p-5 relative ml-auto"
        onClick={() => userData && toggleItem(t('profile'))}
      >
        {!userData && <Link href={"/auth"}>{t('enter')}</Link>}
        {userData && <h4>{t('profile')+ ": " +userData?.firstName + " " + userData?.lastName}</h4>}
        {openItemId === t('profile') && <NavListItem.Profile logout={logout} />}
      </div>
    </nav>
  );
};
