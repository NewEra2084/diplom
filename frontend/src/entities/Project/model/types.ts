import { TaskInProject } from "@/entities/Task/model/types";

export type Project = {
  id: string;
  name: string,
  description: string,
  managerId: string,
  tasks: TaskInProject[]
}