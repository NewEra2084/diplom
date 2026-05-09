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
  console.log(requests);
  
  return (
    <div>
      {requests.map((request) => (
        <TaskEl editable={false} task={request.task}></TaskEl>
      ))}
    </div>
  );
}
