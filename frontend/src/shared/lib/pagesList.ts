import { Column } from "./types";


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
        path: "/manager",
        name: "manager",
        roles: ["ROLE_MANAGER"],
      },
      { path: "/admin", name: "admin", roles: ["ROLE_ADMIN"] },
    ],
    roles: ["ROLE_MANAGER", "ROLE_ADMIN"],
  },
];
