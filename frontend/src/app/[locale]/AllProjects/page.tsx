"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import {
  addProject,
  deleteProject,
  getProjects,
} from "@/entities/Project/api/endpoints";
import { Project } from "@/entities/Project/model/types";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ListItem } from "@/widgets/ListItem";
import { ListPanel } from "@/widgets/ListPanel/ListPanel";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "@/entities/User/api/endpoints";
import { User } from "@/entities/User/model/types";
import { ListAllItem } from "@/widgets/ListAllItem";
import { TaskEl } from "./components/Task";
import { Task } from "@/entities/Task/model/types";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_MANAGER"]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [fields, setFields] = useState([
    {
      name: "name",
      placeholder: "Название",
      value: "",
      validate: 3,
      type: "text",
    },
    {
      name: "description",
      placeholder: "Описание",
      value: "",
      validate: 10,
      type: "text",
    },
    { name: "managerId", placeholder: "Менеджер", value: "", type: "select" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [managers, setManagers] = useState<User[]>([]);
  const [edited, setEdited] = useState<string | null>(null);
  const workerA = useLayoutState((state) => state.workerAdded);
  const setW = useLayoutState((state) => state.setWorkerAdded);
  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects || []);
      setW(false);
      setIsOpen(false);
    });
  }, [workerA, setW]);
  useEffect(() => {
    fetchAllUsers().then((res) => {
      const ms = res.filter((user) => user.rolesName.includes("ROLE_MANAGER"));
      if (ms) {
        setManagers(ms || []);
      }
    });
  }, []);

  const Validate = async (purpose: "add" | "update") => {
    const res = fields.every((item) => {
      if (!item.validate) {
        return true;
      }
      return item.value.length >= item.validate;
    });
    if (!res) {
      return;
    } else {
      if (purpose === "add") {
        const result = await addProject({
          name: fields[0].value,
          description: fields[1].value,
          managerId: fields[2].value || managers[0].id,
        });
        if (!result) return;
        setW(true);
        setIsOpen(false);
        const prjs = await getProjects();
        setProjects((prev) => prjs);
        console.log(projects);
        
      }
    }
  };
  const { asideIsOpen, viewport } = useLayoutState();
  const filters = [{ id: 2, name: "string", link: "string", type: "string" }];

  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Фильтры" filters={filters} />
      {((viewport < 800 && !asideIsOpen) || viewport >= 800) && (
        <Body>
          <div className="w-full h-full flex flex-col relative overflow-y-scroll">
            {managers[0] && (
              <ListPanel isOpen={isOpen} setIsOpen={setIsOpen}>
                <form
                  className="border-2 rounded-2xl flex flex-col gap-3 p-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    Validate("add");
                  }}
                >
                  {fields.map((field) =>
                    field.type === "text" ? (
                      <input
                        key={field.name}
                        className="border-2 rounded-xl outline-none p-2"
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => {
                          setFields((prev) =>
                            prev.map((item) =>
                              item.name === field.name
                                ? { ...item, value: e.target.value }
                                : item,
                            ),
                          );
                        }}
                      ></input>
                    ) : (
                      <select
                        key={field.name}
                        className="border-2 rounded-xl outline-none p-2"
                        value={field.value}
                        onChange={(e) => {
                          setFields((prev) =>
                            prev.map((item) =>
                              item.name === field.name
                                ? { ...item, value: e.target.value }
                                : item,
                            ),
                          );
                        }}
                      >
                        {managers.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.firstName +
                                " " +
                                item.lastName +
                                " " +
                                item.patronymic +
                                ": " +
                                item.jobTitleName}
                            </option>
                          );
                        })}
                      </select>
                    ),
                  )}
                  <input
                    type="submit"
                    value={"Сохранить"}
                    className="py-2 w-full border-2 bg-secondary rounded-2xl text-main"
                  />
                </form>
              </ListPanel>
            )}
            <div className="w-full flex-1 mt-3 flex flex-col gap-3">
              {projects[0] ? (
                projects.map((project) => (
                  <ListAllItem
                    setProjects={setProjects}
                    title={project.name + ": " + project.description}
                    key={project.id}
                    item={project}
                    managers={managers}
                    manager={
                      managers.find((item) => item.id === project.managerId) ||
                      managers[0]
                    }
                    deleteItem={deleteProject}
                    listState={[projects, setProjects]}
                    editedState={[edited, setEdited]}
                  >
                    
                  </ListAllItem>
                ))
              ) : (
                <div className="flex justify-center items-center pb-4 text-3xl h-full">
                  No projects found
                </div>
              )}
            </div>
          </div>
        </Body>
      )}
    </div>
  );
}
