import { Page } from "@/shared/lib/types";

export type Column = {
  title: string;
  pages: Page[];
  roles?: ("ROLE_EMPLOYEE" | "ROLE_ADMIN" | "ROLE_MANAGER")[];
};
