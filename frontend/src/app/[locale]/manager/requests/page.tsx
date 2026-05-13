"use client"
import { getTaskRequests } from "@/entities/Task/api/endpoints";
import { Task } from "@/entities/Task/model/types";
import { User } from "@/entities/User/model/types";
import { useEffect, useState } from "react";
import { TaskEl } from "../../AllProjects/components/Task";

export default function Page() {
  const [requests, setRequests] = useState<
    {
      id: string;
      status: string;
      executor: Partial<User>;
      task: Task;
    }[]
  >([]);
  useEffect(() => {
    (async () => {
      const result = await getTaskRequests();
      if (result !== null) {
        setRequests(result);
      }
    })();
  }, []);  
  
  return (
    <div>
      {requests.filter(request=>request.status!=="ACCEPTED").map((request) => (
        <TaskEl key={request.id} variant="managerPanel" request={request} editable={false} task={request.task}></TaskEl>
      ))}
    </div>
  );
}
