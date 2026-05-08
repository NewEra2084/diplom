"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { deleteWorker, fetchAllUsers } from "@/entities/User/api/endpoints";
import { UserStore } from "@/entities/User/model/store";
import { User } from "@/entities/User/model/types";
import { ListItem } from "@/widgets/ListItem";
import { ListPanel } from "@/widgets/ListPanel/ListPanel";
import { UserData } from "@/widgets/profile";
import { useEffect, useState } from "react";

export default function Page() {
  const [workers, setWorkers] = useState<User[]>([]);
  const userData = UserStore((state) => state.user);
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
      <ListPanel isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserData editable={false} />
      </ListPanel>
      <div className="w-full flex-1 mt-3 flex flex-col gap-3">
        {workers ? (
          workers.map((worker) => (
            worker.id !== userData.id && <ListItem
              title={
                worker.firstName +
                " " +
                worker.lastName +
                " " +
                worker.patronymic
              }
              key={worker.id}
              item={worker}
              deleteItem={deleteWorker}
              listState={[workers, setWorkers]}
              editedState={[edited, setEdited]}
            >
              <UserData editable={false} updateId={worker.id} />
            </ListItem>
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
