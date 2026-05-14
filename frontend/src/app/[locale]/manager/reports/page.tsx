"use client";
import { getTaskReports } from "@/entities/Task/api/endpoints";
import { useEffect, useState } from "react";
import { TaskEl } from "../../AllProjects/components/Task";
import { Project } from "@/entities/Project/model/types";

export default function Page() {
  const [reports, setReports] = useState<
    {
      id: string;
      title: string;
      description: string;
      status: string;
      project: Omit<Project, "tasks" | "managerId">;
      files: string[];
    }[]
  >([]);
  useEffect(() => {
    (async () => {
      const result = await getTaskReports();
      if (result !== null) {
        setReports(result);
      }
    })();
  }, []); 

  return (
    <div>
      {reports.filter((request) => request.status === "NEW").map((request) => (
        <TaskEl
          key={request.id}
          variant="reports"
          request={request}
          editable={false}
        ></TaskEl>
      ))}
    </div>
  );
}
