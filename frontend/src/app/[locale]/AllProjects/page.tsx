"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import {
  addJob,
  deleteJob,
  getJobTitles,
} from "@/entities/JobTitle/api/endpoints";
import { JobTitle } from "@/entities/JobTitle/model/types";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ListItem } from "@/widgets/ListItem";
import { ListPanel } from "@/widgets/ListPanel/ListPanel";
import { useEffect, useState } from "react";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_MANAGER"]);
  
  const [jobs, setJobs] = useState<JobTitle[]>([]);
  const [fields, setFields] = useState([
    { name: "name", placeholder: "Название", value: "", validate: 3 },
    { name: "description", placeholder: "Описание", value: "", validate: 10 },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [edited, setEdited] = useState<string | null>(null);
  const workerA = useLayoutState((state) => state.workerAdded);
  const setW = useLayoutState((state) => state.setWorkerAdded);
  useEffect(() => {
    getJobTitles().then((jobs) => {
      setJobs(jobs || []);
      setW(false);
      setIsOpen(false);
    });
  }, [workerA, setW]);
  const Validate = async (purpose: "add" | "update") => {
    const res = fields.every((item) => {
      return item.value.length >= item.validate;
    });
    if (!res) {
      return;
    } else {
      if (purpose === "add") {
        const result = await addJob(fields[0].value, fields[1].value);
        if (!result) return;
        setW(true);
        setIsOpen(false);
      }
    }
  };
  const { asideIsOpen, viewport } = useLayoutState();
  const filters = [{ id: 2, name: "string", link: "string", type: "string" }];
  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Фильтры" filters={filters} />
      {((viewport < 800 && !asideIsOpen) || viewport >= 800) && (
        <Body>
          <div className="w-full h-full flex flex-col relative overflow-y-scroll">
            <ListPanel isOpen={isOpen} setIsOpen={setIsOpen}>
              <form
                className="border-2 rounded-2xl flex flex-col gap-3 p-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  Validate("add");
                }}
              >
                {fields.map((field) => (
                  <input
                    key={field.name}
                    className="border-2 rounded-xl outline-none p-2"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => {
                      setFields((prev) =>
                        prev.map((item) =>
                          item.name === field.name
                            ? { ...item, value: e.target.value }
                            : item,
                        ),
                      );
                    }}
                  ></input>
                ))}
                <input
                  type="submit"
                  value={"Сохранить"}
                  className="py-2 w-full border-2 bg-secondary rounded-2xl text-main"
                />
              </form>
            </ListPanel>
            <div className="w-full flex-1 mt-3 flex flex-col gap-3">
              {jobs[0] ? (
                jobs.map((job) => (
                  <ListItem
                    title={job.name + ": " + job.description}
                    key={job.id}
                    item={job}
                    deleteItem={deleteJob}
                    listState={[jobs, setJobs]}
                    editedState={[edited, setEdited]}
                  ></ListItem>
                ))
              ) : (
                <div className="flex justify-center items-center pb-4 text-3xl h-full">
                  No jobs found
                </div>
              )}
            </div>
          </div>
        </Body>
      )}
    </div>
  );
}
