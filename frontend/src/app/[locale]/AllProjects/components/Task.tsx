import { Project } from "@/entities/Project/model/types";
import {
  deleteTask,
  employeeTakeTask,
  updateTask,
} from "@/entities/Task/api/endpoints";
import { Task, TaskInProject } from "@/entities/Task/model/types";
import { UserStore } from "@/entities/User/model/store";
import React, { useState } from "react";

type Props = {
  task: TaskInProject;
  project?: string;
  delet: (id:string)=>void;
};

export const TaskEl = ({ task, project, delet }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState<Task>({
    id: "",
    name: "",
    description: "",
    numberOfPoints: 1,
    deadline: "",
    taskCategoryId: task.taskCategory?.id,
    projectId: project || "",
  });

  const userData = UserStore((store) => store.user);
  return (
    <div className="p-2 border-2 border-secondary rounded-xl">
      {isEdit ? "" : <h4>Задача {task.name}</h4>}
      <h4>Описание: {task.description}</h4>
      <h4>Очки: {task.numberOfPoints}</h4>
      <h4>Дэдлайн: {task.deadline}</h4>
      <div className="flex gap-3">
        {userData?.rolesName.includes("ROLE_EMPLOYEE") ? (
          <button
            onClick={() => {
              employeeTakeTask(task.id);
            }}
            disabled={task.status !== "FREE"}
            className="border-2 border-secondary p-2 rounded-xl"
          >
            Взять задачу
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit((prev) => !prev);
              if (isEdit) {
                updateTask(fields);
              }
            }}
            disabled={task.status !== "FREE"}
            className="border-2 border-secondary p-2 rounded-xl"
          >
            Изменить задачу
          </button>
        )}
        {userData?.rolesName.includes("ROLE_MANAGER") && (
          <button
            className="border-2 border-secondary p-2 rounded-xl"
            onClick={() => {
              const confirmation = confirm("Вы уверены?");
              if (confirmation) {deleteTask(task.id); delet(task.id)}
            }}
          >
            Удалить задачу
          </button>
        )}
      </div>
    </div>
  );
};
