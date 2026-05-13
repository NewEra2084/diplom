import { Project } from "@/entities/Project/model/types";
import {
  acceptTaskReport,
  acceptTaskRequest,
  deleteTask,
  employeeSendTask,
  employeeTakeTask,
  updateTask,
} from "@/entities/Task/api/endpoints";
import { Task, TaskInProject } from "@/entities/Task/model/types";
import { UserStore } from "@/entities/User/model/store";
import { User } from "@/entities/User/model/types";
import { useState } from "react";

type Props = {
  task?: TaskInProject;
  project?: Project;
  delet?: (id: string) => void;
  editable?: boolean;
  variant?: "managerPanel" | "projects" | "workerTask" | "reports";
  request: {
    id: string;
    executor: Partial<User>;
    task: Task;
  };
};

export const TaskEl = ({
  task,
  project,
  delet,
  editable = true,
  variant = "projects",
  request,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState<Task>({
    id: task?.id || "",
    name: task?.name || "",
    description: task?.description || "",
    numberOfPoints: task?.numberOfPoints || 0,
    deadline: task?.deadline || "",
    taskCategoryId: task?.category?.id || "",
    projectId: project?.id || "",
  });
  const userData = UserStore((store) => store.user);
  if (variant === "projects") {
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
              disabled={task.status !== "FREE" || !project?.canTake}
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
  } else if (variant === "managerPanel") {
    return (
      <div className="p-2 border-2 border-secondary rounded-xl">
        <h4>Задача {request.task.name}</h4>
        <h4>Описание: {request.task.description}</h4>
        <h4>
          Исполнитель:
          {request.executor.firstName +
            " " +
            request.executor.lastName +
            " " +
            request.executor.patronymic}
        </h4>
        <div className="flex gap-3">
          <button
            onClick={() => {
              acceptTaskRequest(request.id).then(
                (res) => res == true && alert("Операция выполнена успешно"),
              );
            }}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
          >
            Одобрить запрос
          </button>
        </div>
      </div>
    );
  }else if (variant === "reports") {
    return (
      <div className="p-2 border-2 border-secondary rounded-xl">
        <h4>Задача {request.title}</h4>
        <h4>Описание: {request.description}</h4>
        <div className="flex gap-3">
          <button
            onClick={() => {
              acceptTaskReport(request.id).then(
                (res) => res == true && alert("Операция выполнена успешно"),
              );
            }}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
          >
            Одобрить запрос
          </button>
        </div>
      </div>
    );
  } else if (variant === "workerTask") {
    return (
      <div className={`p-2 relative border-2 border-secondary rounded-xl my-5`}>
        {Date.parse(request.deadline) - Date.now() > 0 ? (
          <div className="absolute -top-9 left-5 rounded-t-xl pt-2 px-4 border-t-2 border-x-2">
            Срок сдачи:
            {new Date(Date.parse(request.deadline) - Date.now()).getDate()},
            {" " +
              new Date(Date.parse(request.deadline)).getDate() +
              "." +
              new Date(Date.parse(request.deadline)).getMonth() +
              "." +
              new Date(Date.parse(request.deadline)).getFullYear()}
          </div>
        ) : (
          <div className="absolute -top-9 left-5 rounded-t-xl pt-2 px-4 border-t-2 border-x-2">
            Срок сдачи прошел
          </div>
        )}
        <div className="flex justify-between pr-10">
          <div>
            <h4>Задача {request.name}</h4>
            <h4>Описание: {request.description}</h4>
          </div>
          <h2 className="text-2xl flex items-center relative text-accent after:content-[''] after:rounded-full after:p-5 after:outline-2 after:absolute after:outline-accent after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]">
            {request.numberOfPoints}
          </h2>
        </div>
        {request.status === "ACTIVE" && (
          <button
            onClick={() => {
              employeeSendTask({
                taskId: request.id,
                title: request.name,
                description: request.description,
                files: [],
              }).then(
                (res) => res == true && alert("Операция выполнена успешно"),
              );
            }}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
          >
            Сдать задачу
          </button>
        )}
      </div>
    );
  }
};
