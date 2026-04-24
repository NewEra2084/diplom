import { useUserStore } from "@/entities/user/model/store";
import { roles, User } from "@/entities/user/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavListItem } from "./NavListItem";

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
    title: "Задачи",
    pages: [
      { path: "/MyTasks", name: "Мои задачи", roles: ["ROLE_EMPLOYEE"] },
      {
        path: "/AllTasks",
        name: "Все задачи",
        roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
      },
    ],
    roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
  },
  {
    title: "Проекты",
    pages: [
      {
        path: "/MyProjects",
        name: "Мои проекты",
        roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
      },
      { path: "/AllProjects", name: "Все проекты", roles: ["ROLE_MANAGER"] },
    ],
    roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
  },
  {
    title: "Панель управления",
    pages: [
      {
        path: "/ManagerPanel",
        name: "Менеджер панель",
        roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
      },
      { path: "/AdminPanel", name: "Админ панель", roles: ["ROLE_ADMIN"] },
    ],
    roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
  },
];

export const Navigation = ({ className }: Props) => {
  const userData = useUserStore((store) => store.user);
  const [a,b] = useState<User | null>();
  const logout = useUserStore((store) => store.logout);
  // Храним только ID открытого пункта, а не массив статусов
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  useEffect(()=>{
    b(userData);
  },[userData])

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
                onClick={() => toggleItem(item.title)}
              >
                {item.title}
                {openItemId === item.title && (
                  <NavListItem userData={userData} item={item} />
                )}
              </li>
            ),
        )}
      </ul>
      <div
        className="p-5 relative ml-auto"
        onClick={() => userData && toggleItem("Профиль")}
      >
        {!userData && <Link href={"/auth"}>Войти</Link>}
        {userData && <h4>{"Профиль: " +userData?.firstName + " " + userData?.lastName}</h4>}
        {openItemId === "Профиль" && <NavListItem.Profile logout={logout} />}
      </div>
    </nav>
  );
};
