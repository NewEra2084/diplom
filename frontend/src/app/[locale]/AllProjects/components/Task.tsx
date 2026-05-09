import { Project } from "@/entities/Project/model/types";
import {
  deleteTask,
  employeeTakeTask,
  updateTask,
} from "@/entities/Task/api/endpoints";
import { Task, TaskInProject } from "@/entities/Task/model/types";
import { UserStore } from "@/entities/User/model/store";
import { useState } from "react";

type Props = {
  task: TaskInProject;
  project?: string;
  delet?: (id: string) => void;
  editable?: boolean;
};

export const TaskEl = ({ task, project, delet, editable = true }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState<Task>({
    id: task.id,
    name: task.name,
    description: task.description,
    numberOfPoints: task.numberOfPoints,
    deadline: task.deadline || "",
    taskCategoryId: task?.category?.id,
    projectId: project || "",
  });
  console.log(task);
  

  const userData = UserStore((store) => store.user);
  return (
    <div className="p-2 border-2 border-secondary rounded-xl">
      {isEdit ? (
        <input
          className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
          value={fields.name}
          placeholder="Название"
          onChange={(e) =>
            setFields((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      ) : (
        <h4>Задача {task.name}</h4>
      )}
      {isEdit ? (
        <input
          className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
          value={fields.description}
          placeholder="Описание"
          onChange={(e) =>
            setFields((prev) => ({ ...prev, description: e.target.value }))
          }
        ></input>
      ) : (
        <h4>Описание: {task.description}</h4>
      )}
      {isEdit ? (
        <select
          className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
          value={fields.numberOfPoints}
          onChange={(e) =>
            setFields((prev) => ({
              ...prev,
              numberOfPoints: parseInt(e.target.value),
            }))
          }
        >
          {[1, 3, 5, 8, 13].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      ) : (
        <h4>Очки: {task.numberOfPoints}</h4>
      )}
      {isEdit ? (
        <input
          className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
          value={fields.deadline}
          type="date"
          placeholder="Дата"
          onChange={(e) => {
            console.log(e.target.value);

            setFields((prev) => ({ ...prev, deadline: e.target.value }));
          }}
        ></input>
      ) : (
        <h4>Дэдлайн: {task.deadline}</h4>
      )}
      <div className="flex gap-3">
        {userData?.rolesName.includes("ROLE_EMPLOYEE") || !editable ? (
          <button
            onClick={() => {
              employeeTakeTask(task.id);
            }}
            disabled={task.status !== "FREE"}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
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
            {isEdit ? "Сохранить" : "Изменить задачу"}
          </button>
        )}
        {userData?.rolesName.includes("ROLE_MANAGER") && editable && (
          <button
            className="border-2 border-secondary p-2 rounded-xl"
            onClick={() => {
              const confirmation = confirm("Вы уверены?");
              if (confirmation) {
                deleteTask(task.id);
                delet && delet(task.id);
              }
            }}
          >
            Удалить задачу
          </button>
        )}
      </div>
    </div>
  );
};
