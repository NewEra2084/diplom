import { Column } from "@/widgets/header/store/types";

export const columns: Column[] = [
  {
    title: "tasks",
    pages: [
      { path: "/tasks/active", name: "active", roles: ["ROLE_EMPLOYEE"] },
      { path: "/tasks/archive", name: "archive", roles: ["ROLE_EMPLOYEE"] },
    ],
    roles: ["ROLE_EMPLOYEE"],
  },
  {
    title: "projects",
    pages: [
      {
        path: "/AllProjects",
        name: "all projects",
        roles: ["ROLE_MANAGER", "ROLE_EMPLOYEE"],
      },
    ],
    roles: ["ROLE_EMPLOYEE", "ROLE_MANAGER"],
  },
  {
    title: "panel",
    pages: [
      {
        path: "/manager",
        name: "manager",
        roles: ["ROLE_MANAGER"],
      },
      { path: "/admin", name: "admin", roles: ["ROLE_ADMIN"] },
    ],
    roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
  },
];
