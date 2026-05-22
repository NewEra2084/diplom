import { Project } from "@/entities/Project/model/types";
import { User } from "@/entities/User/model/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Project2 = {
  id: string;
  workers: User[];
};

type store = {
  projects: Project2[];
  addProject: (project:Project[]) => void;
  removeProject: (id: string) => void;
  addWorker: (id: string, worker: User) => void;
  removeWorker: (id: string, workerId: string) => void;
  projectHasWorker: (projectId: string, workerId: string) => User | null;
};

export const usePinnedWorkersStore = create<store>()(
  persist(
    (set, get) => ({
      projects: [],
      addProject: (project) => {
        set((prev) => ({
          ...prev,
          projects: project.map(p=>({id:p.id, workers: []})),
        }));
      },
      removeProject: (id) => {
        set((prev) => ({
          ...prev,
          projects: prev.projects.filter((project) => project.id !== id),
        }));
      },
      addWorker: (id, worker) => {
        set((prev) => ({
          ...prev,
          projects: prev.projects.map((project) =>
            project.id === id
              ? {
                  ...project,
                  workers: [...project.workers, worker],
                }
              : project,
          ),
        }));
      },
      removeWorker: (id, workerId) => {
        set((prev) => ({
          ...prev,
          projects: prev.projects.map((project) =>
            project.id === id
              ? {
                  ...project,
                  workers: project.workers.filter(
                    (worker) => workerId !== worker.id,
                  ),
                }
              : project,
          ),
        }));
      },
      projectHasWorker: (projectId, workerId)=>{
        const soughtProject = get().projects.filter(project=>project.id === projectId);
        return soughtProject[0]?.workers.filter(worker=>worker.id === workerId)[0] || false;
      }
    }),
    { name: "projectWorkers" },
  ),
);
