"use client";
import { Project } from "@/entities/Project/model/types";
import {
  employeeGetRequests,
  employeeGetTasks,
} from "@/entities/Task/api/endpoints";
import { Category, Task } from "@/entities/Task/model/types";
import { useEffect, useState } from "react";
import { TaskEl } from "../../AllProjects/components/Task";
import { User } from "@/entities/User/model/types";

export default function Page() {
  const [requests, setRequests] = useState<
    {
      id: string;
      status: string;
      executor: User;
      task: Task;
      comment: string;
    }[]
  >([]);
  
  
  useEffect(() => {
    (async () => {
      const result = await employeeGetRequests();
      if (result !== null) {
        setRequests(result);
      }
    })();
  }, []);
  return (
    <div className="space-y-4">
      {requests
        .map((request) => (
          <TaskEl
            key={request.id}
            variant="requests"
            request={request}
            editable={false}
          ></TaskEl>
        ))}
    </div>
  );
}
