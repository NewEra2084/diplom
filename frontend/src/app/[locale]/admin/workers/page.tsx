"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { deleteWorker, fetchAllUsers } from "@/entities/User/api/endpoints";
import { User } from "@/entities/User/model/types";
import { UserData } from "@/widgets/profile";
import { Pencil, PencilOff, SquarePlus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [workers, setWorkers] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [edited, setEdited] = useState<string | null>(null);
  const workerA = useLayoutState((state) => state.workerAdded);
  const setW = useLayoutState((state) => state.setWorkerAdded);
  useEffect(() => {
    fetchAllUsers().then((users) => {
      setWorkers(users);
      setW(false);
      setIsOpen(false);
    });
  }, [workerA, setW]);
  return (
    <div className="w-full h-full flex flex-col relative overflow-y-scroll">
      <div className="sticky top-0 w-full flex justify-end-safe p-2 rounded-xl border-2 border-secondary">
        <SquarePlus size={30} onClick={() => setIsOpen((prev) => !prev)} />
      </div>
      <div className="w-full flex-1 mt-3 flex flex-col gap-3">
        {isOpen && <UserData editable={false} />}
        {workers ? (
          workers.map((worker) => (
            <div
              key={worker.id}
              className="p-2 relative rounded-xl border-2 border-secondary flex items-center"
            >
              {edited === worker.id ? (
                <h4>
                  {worker.firstName +
                    " " +
                    worker.lastName +
                    " " +
                    worker.patronymic}{" "}
                </h4>
              ) : (
                <UserData editable={false} updateId={worker.id} />
              )}
              <div
                className={`p-2 ${edited === worker.id ? "absolute top-3 right-5" : "block"} rounded-xl border-2 border-secondary flex items-center justify-center gap-2`}
              >
                {edited === worker.id ? (
                  <Pencil onClick={() => setEdited(worker.id)} />
                ) : (
                  <PencilOff onClick={() => setEdited(null)} />
                )}
                <Trash2
                  onClick={async () => {
                    const success = await deleteWorker(worker.id);
                    if (success) {
                      setWorkers((prev) =>
                        prev.filter((item) => item.id !== worker.id)
                      );
                    }
                  }}
                ></Trash2>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center pb-4 text-3xl h-full">
            No workers found
          </div>
        )}
      </div>
    </div>
  );
}
