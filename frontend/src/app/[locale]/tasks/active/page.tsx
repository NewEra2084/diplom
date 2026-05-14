"use client";
import { Project } from "@/entities/Project/model/types";
import { employeeGetTasks } from "@/entities/Task/api/endpoints";
import { Category } from "@/entities/Task/model/types";
import { useEffect, useState } from "react";
import { TaskEl } from "../../AllProjects/components/Task";

export default function Page() {
  const [requests, setRequests] = useState<
    {
      id: string;
      name: string;
      description: string;
      numberOfPoints: number;
      deadline: string;
      category: Pick<Category, "id" | "name" | "description">;
      status: string;
      project: Pick<Project, "id" | "name" | "description">;
    }[]
  >([]);
  console.log(requests);
  useEffect(() => {
    (async () => {
      const result = await employeeGetTasks();
      if (result !== null) {
        setRequests(result);
      }
    })();
  }, []);
  return (
    <div>
      {requests
        .filter((req) => req.status === "ACTIVE")
        .map((request) => (
          <TaskEl
            key={request.id}
            variant="workerTask"
            request={request}
            editable={false}
          ></TaskEl>
        ))}
    </div>
  );
}
