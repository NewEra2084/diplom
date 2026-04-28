export type Page = { path: string; name: string; roles: ("ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER")[] };
export type Column = {
  title: string;
  pages: Page[];
  roles?: ("ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER")[];
};