import { TaskEl } from "@/app/[locale]/AllProjects/components/Task";
import { useLayoutState } from "@/app/store/useLayoutState";
import { getProjects, updateProject } from "@/entities/Project/api/endpoints";
import { Project } from "@/entities/Project/model/types";
import { addTask, getTaskCategories } from "@/entities/Task/api/endpoints";
import { Task } from "@/entities/Task/model/types";
import { fetchAllUsers } from "@/entities/User/api/endpoints";
import { User } from "@/entities/User/model/types";
import { postTemplate } from "@/shared/api/client";
import { CustomCheckbox } from "@/shared/ui/UICheckbox";
import { Pencil, PencilOff, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  deleteItem: (id: string) => Promise<boolean>;
  item: any;
  manager: User;
  title: string;
  managers: User[];
  editedState: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  listState: [any[], React.Dispatch<React.SetStateAction<any[]>>];
  children?: React.ReactNode;
};

export const ListAllItem = ({
  item,
  deleteItem,
  editedState,
  listState,
  managers,
  manager,
  children,
  title,
  setProjects,
}: Props) => {
  const [edited, setEdited] = editedState;

  const [tasks, setTasks] = useState<Task[]>(item.tasks);
  const [addTask4, setAddTask] = useState(false);
  const [pinWorker, setPinWorker] = useState(false);
  const [pinWorkerQuery, setPinWorkerQuery] = useState([]);
  const [workers, setWorkers] = useState<User[]>([]);
  const [editFields, setEditFields] = useState({
    name: item.name || "",
    description: item.description || "",
    managerId: manager?.id || "",
  });
  const [categories, setCategories] = useState<
    { name: string; description: string }[]
  >([]);
  useEffect(() => {
    fetchAllUsers().then((res) => {
      setWorkers(res || []);
    });
  }, []);

  useEffect(() => {
    setEditFields((prev) => ({ ...prev, managerId: manager?.id }));
  }, [manager]);

  const [fields, setFields] = useState({
    name: "",
    description: "",
    numberOfPoints: 1,
    deadline: "",
    projectId: item.id,
    taskCategoryId: "",
  });
  const setW = useLayoutState((state) => state.setWorkerAdded);

  useEffect(() => {
    (async () => {
      const a = await getTaskCategories();
      if (a) {
        setCategories(a);
        setFields((prev) => ({ ...prev, taskCategoryId: a[0].id }));
      }
    })();
    setW(false);
  }, [setW]);

  const [_, setItems] = listState;
  const Validate = async (fields) => {
    addTask(fields);
    setW(true);
    setAddTask(() => false);
    const prjs = await getProjects();
    setProjects((prev) => prjs || prev);
  };
  return (
    <div className="w-full flex flex-col justify-between">
      <div
        key={item.id}
        className={`p-2 relative w-full rounded-t-xl border-2 border-secondary flex ${manager ? "justify-between" : "justify-center"} items-center`}
      >
        {edited !== item.id ? (
          <div className="flex gap-10 items-center">
            <h4 className={`${manager ? "" : "text-center"}`}>{title}</h4>
            {manager && (
              <h4>Менеджер: {manager?.firstName + " " + manager?.lastName}</h4>
            )}
            {manager && (
              <>
                <button
                  className="p-2 border-2 border-secondary rounded-xl"
                  onClick={() => setAddTask((prev) => !prev)}
                >
                  + Добавить задачу
                </button>
                
                <select
                  onChange={(e) => {
                    postTemplate("/manager/pin/employee", {
                      employeeId: e.target.value,
                      projectId: item.id,
                    });
                  }}
                >
                  <option disabled>Прикрепить сотрудника</option>
                  {workers
                    .filter((worker) =>
                      worker.rolesName.includes("ROLE_EMPLOYEE"),
                    )
                    .map((worker) => (
                      <option key={worker.id} value={worker.id}>
                        {worker.firstName + " " + worker.lastName}
                      </option>
                    ))}
                </select>
              </>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <label className="flex flex-col">
              <h5>Название</h5>
              <input
                className="p-2 border-2 rounded-xl border-secondary flex-1"
                value={editFields.name}
                placeholder="От 3 символов"
                onChange={(e) =>
                  setEditFields((prev) => ({ ...prev, name: e.target.value }))
                }
              ></input>
            </label>
            <label className="flex flex-col">
              <h5>Описание</h5>
              <input
                className="p-2 border-2 rounded-xl border-secondary flex-1"
                value={editFields.description}
                placeholder="От 10 символов"
                onChange={(e) =>
                  setEditFields((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              ></input>
            </label>
            <select
              className="p-2 border-2 rounded-xl border-secondary flex-1"
              value={editFields.managerId}
              onChange={(e) =>
                setEditFields((prev) => ({
                  ...prev,
                  manager: e.target.value,
                }))
              }
            >
              {managers.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.firstName + " " + m.lastName}
                </option>
              ))}
            </select>
            <button
              className="p-2 border-2 rounded-xl border-secondary flex-1"
              onClick={async () => {
                const response = updateProject({
                  id: item.id as string,
                  ...editFields,
                });
                if (response != null) {
                  setEdited(null);
                  setProjects((prev) => {
                    return prev.map((project) => {
                      return project.id === item.id
                        ? {
                            ...project,
                            name: editFields.name,
                            description: editFields.description,
                            managerId: editFields.managerId,
                          }
                        : project;
                    });
                  });
                }
              }}
            >
              Сохранить
            </button>
          </div>
        )}
        {manager && (
          <div
            className={`p-2 ${edited === item.id ? "absolute top-1 right-2" : "block"} rounded-xl border-2 border-secondary flex items-center justify-center gap-2`}
          >
            {edited === item.id ? (
              <PencilOff onClick={() => setEdited(null)} />
            ) : (
              <Pencil onClick={() => setEdited(item.id)} />
            )}
            <Trash2
              onClick={async () => {
                const success = await deleteItem(item.id);
                if (success) {
                  setItems((prev) =>
                    prev.filter((item2) => item.id !== item2.id),
                  );
                }
              }}
            ></Trash2>
          </div>
        )}
      </div>
      {addTask4 && (
        <form
          className="border-x-2 border-b-2 flex flex-col gap-3 border-secondary p-4"
          onSubmit={(e) => {
            e.preventDefault();
            Validate(fields);
          }}
        >
          <div className="flex gap-3">
            <input
              type="text"
              className="p-2 border-2 rounded-xl border-secondary"
              placeholder="Название"
              value={fields.name}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              className="p-2 border-2 rounded-xl border-secondary"
              placeholder="Описание"
              value={fields.description}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <input
              type="date"
              className="p-2 border-2 rounded-xl border-secondary"
              placeholder="Дэдлайн"
              value={fields.deadline}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, deadline: e.target.value }))
              }
            />
            <select
              className="p-2 border-2 rounded-xl border-secondary"
              value={fields.numberOfPoints}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  numberOfPoints: parseInt(e.target.value),
                }))
              }
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={8}>8</option>
              <option value={13}>13</option>
            </select>
            <select
              className="p-2 border-2 rounded-xl border-secondary"
              value={fields.taskCategoryId}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  taskCategoryId: e.target.value,
                }))
              }
            >
              {categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            className="p-2 border w-full rounded-xl border-secondary"
            value={"Создать"}
          />
        </form>
      )}
      <div className="p-2 rounded-b-xl border-2 border-t-0 border-secondary flex flex-col gap-3 max-h-[50vh] overflow-y-scroll">
        {tasks.map((task) => (
          <TaskEl
            delet={(id: string) => {
              setTasks((prev) => prev.filter((prevTask) => prevTask.id !== id));
            }}
            project={item}
            task={task}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
};
