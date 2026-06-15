import { Project } from "@/entities/Project/model/types";
import JSZip from "jszip";
import {
  acceptTaskReport,
  acceptTaskRequest,
  deleteTask,
  employeeSendTask,
  employeeTakeTask,
  rejectTaskReport,
  rejectTaskRequest,
  updateTask,
} from "@/entities/Task/api/endpoints";
import { Task, TaskInProject } from "@/entities/Task/model/types";
import { UserStore } from "@/entities/User/model/store";
import { User } from "@/entities/User/model/types";
import { getBlobTemplate, getTemplate } from "@/shared/api/client";
import { DialogComponent } from "@/shared/ui/Dialog";
import { ArrowBigDown, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  task?: TaskInProject;
  project?: Project;
  delet?: (id: string) => void;
  editable?: boolean;
  variant?: "managerPanel" | "projects" | "workerTask" | "reports" | "requests";
  request: {
    id: string;
    executor: Partial<User>;
    task: Task;
  };
};

const handleDownload = () => {};

export const TaskEl = ({
  task,
  project,
  delet,
  set,
  editable = true,
  variant = "projects",
  request,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [comm, setComm] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };
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
  useEffect(() => {
    if (!request?.files) return;

    const fetchFiles = async () => {
      const promises = request.files.map(async (str) => {
        const response = await getBlobTemplate(`/file/get/report/${str}`);
        return response?.data as File;
      });
      const results = await Promise.all(promises);
      const validFiles = results.filter(
        (file) => file !== undefined && file !== null,
      );

      setFiles((prev) => [...validFiles]);
    };

    fetchFiles();
  }, []);
  console.log(files);
  const getFileExtension = async (blob: Blob): Promise<string> => {
    // По MIME-типу
    if (blob.type === "image/png") return ".png";
    if (blob.type === "image/jpeg") return ".jpg";
    if (blob.type === "application/pdf") return ".pdf";
    if (blob.type === "text/plain") return ".txt";
    if (
      blob.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      return ".docx";

    // По магическим байтам для PNG
    const bytes = await blob.slice(0, 8).arrayBuffer();
    const uint8 = new Uint8Array(bytes);
    if (
      uint8[0] === 0x89 &&
      uint8[1] === 0x50 &&
      uint8[2] === 0x4e &&
      uint8[3] === 0x47
    ) {
      return ".png";
    }

    return ".bin"; // неизвестный тип
  };
  const downloadAll = async () => {
    const zip = new JSZip();

    const fileTypes = await Promise.all(files.map((file)=>getFileExtension(file)));
    files.forEach((file, id) => {
      zip.file(id+fileTypes[id], file);
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "documents.zip";
    link.click();

    URL.revokeObjectURL(url);
  };

  if (variant === "projects") {
    return (
      <div className="p-2 border-2 border-secondary rounded-xl">
        {isEdit ? (
          <label className="flex flex-col">
            <h5>Название</h5>
            <input
              className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
              value={fields.name}
              placeholder="Название"
              onChange={(e) =>
                setFields((prev) => ({ ...prev, name: e.target.value }))
              }
            ></input>
          </label>
        ) : (
          <h4>Задача {task.name}</h4>
        )}
        {isEdit ? (
          <label className="flex flex-col">
            <h5>Описание</h5>
            <input
              className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
              value={fields.description}
              placeholder="Описание"
              onChange={(e) =>
                setFields((prev) => ({ ...prev, description: e.target.value }))
              }
            ></input>
          </label>
        ) : (
          <h4>Описание: {task.description}</h4>
        )}
        {isEdit ? (
          <label className="flex flex-col">
            <h5>Очки</h5>
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
          </label>
        ) : (
          <h4>Очки: {task.numberOfPoints}</h4>
        )}
        {isEdit ? (
          <label className="flex flex-col">
            <h5>Дэдлайн</h5>
            <input
              className="py-1 px-2 border-2 rounded-xl border-secondary flex-1"
              value={fields.deadline}
              type="date"
              placeholder="Дата"
              onChange={(e) => {
                setFields((prev) => ({ ...prev, deadline: e.target.value }));
              }}
            ></input>
          </label>
        ) : (
          <h4>Дэдлайн: {task.deadline}</h4>
        )}
        <div className="flex gap-3 mt-3">
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
            <>
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
              {isEdit && (
                <button
                  disabled={task.status !== "FREE"}
                  onClick={() => {
                    setIsEdit((prev) => !prev);
                  }}
                  className="border-2 border-secondary p-2 rounded-xl"
                >
                  Отмена
                </button>
              )}
            </>
          )}
          {userData?.rolesName.includes("ROLE_MANAGER") && editable && (
            <button
              className="border-2 border-secondary p-2 rounded-xl"
              onClick={() => {
                deleteTask(task.id);
                delet && delet(task.id);
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
          <button
            onClick={openDialog}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
          >
            Отклонить запрос
          </button>
          <dialog
            ref={dialogRef}
            className="rounded-lg m-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main p-6 backdrop:bg-black/50"
          >
            <div className="flex flex-col gap-4">
              <label>
                <h5>Комментарий</h5>
                <input
                  type="text"
                  value={comm}
                  className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
                  onInput={(e) => setComm(e.currentTarget.value)}
                />
              </label>

              <button
                onClick={() => {
                  rejectTaskRequest(request.id, comm).then(
                    (res) => res == true && alert("Операция выполнена успешно"),
                  );
                }}
                className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
              >
                Добавить комментарий
              </button>
              <button
                onClick={closeDialog}
                className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
              >
                Отмена
              </button>
            </div>
          </dialog>
        </div>
      </div>
    );
  } else if (variant === "reports") {
    return (
      <div className="p-2 border-2 border-secondary rounded-xl">
        <h4>Задача {request.title}</h4>
        <h4>Описание: {request.description}</h4>
        <h4>Файлы:</h4>
        <div className="p-2 border flex gap-4 my-2 relative">
          <Download
            className="right-3 top-[50%] translate-y-[-50%] absolute"
            onClick={downloadAll}
          ></Download>
          {files.map((item, id) => {
            const url = URL.createObjectURL(item);
            if (item.type.includes("image")) {
              return (
                <div key={id} className="flex flex-col gap-2 max-w-32">
                  <img src={url} className="w-full"></img>
                  <a
                    href={url}
                    download
                    className="border rounded-xl p-1 text-center"
                  >
                    Скачать
                  </a>
                </div>
              );
            } else {
              const mime = item.type;
              let typ = "Неизвестный тип";

              if (mime === "text/plain") typ = "txt";
              if (mime === "application/msword") typ = "doc";
              if (
                mime ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              )
                typ = "docx";
              if (mime === "text/html") typ = "html";
              if (mime === "application/pdf") typ = "pdf";
              if (mime === "application/json") typ = "json";

              return (
                <div key={id} className="flex flex-col gap-2 max-w-32">
                  <div
                    key={id}
                    className="border-2 w-full h-full text-center p-2"
                  >
                    Текстовый файл
                    <p>Тип: {typ}</p>
                  </div>
                  <a
                    href={url}
                    download
                    className="border rounded-xl p-1 text-center"
                  >
                    Скачать
                  </a>
                </div>
              );
            }
          })}
        </div>
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
          <button
            onClick={() => {
              rejectTaskReport(request.id).then(
                (res) => res == true && alert("Операция выполнена успешно"),
              );
            }}
            className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
          >
            Отклонить запрос
          </button>
        </div>
      </div>
    );
  } else if (variant === "requests") {
    return (
      <div className="p-2 border-2 border-secondary rounded-xl">
        <h4>Задача {request.task.name}</h4>
        <h4>Описание: {request.task.description}</h4>
        <h4>
          Статус: {request.status === "PENDING" && "Отправлено на рассмотрение"}
          {request.status === "ACCEPTED" && "Принято"}
          {request.status === "REJECTED" && "Отклонено"}
        </h4>
        {(request.status !== "PENDING" || request.status === "ACCEPTED") && (
          <h4>Комментарий: {request.comment}</h4>
        )}
      </div>
    );
  } else if (variant === "workerTask") {
    const sendTask = async () => {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));
      formData.append("taskId", request.id);
      formData.append("title", request.name);
      formData.append("description", request.description);
      console.log(formData);

      employeeSendTask(formData).then((res) => {
        if (res === true) alert("Операция выполнена успешно");
      });
    };
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
        {/* Date.parse(request.deadline) - Date.now() > 0 */}
        {request.status === "ACTIVE" && (
          <DialogComponent
            state={[files, setFiles]}
            onClick={() => {
              sendTask();
            }}
          />
        )}
      </div>
    );
  }
};
