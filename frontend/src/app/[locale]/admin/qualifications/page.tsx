"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { getJobTitles } from "@/entities/JobTitle/api/endpoints";
import { JobTitle } from "@/entities/JobTitle/model/types";
import {
  addQualifications,
  deleteQualifications,
  getQualifications,
} from "@/entities/Qualification/api/endpoints";
import { Qualification, Qualifications } from "@/entities/Qualification/model/types";
import { ListItem } from "@/widgets/ListItem";
import { ListPanel } from "@/widgets/ListPanel/ListPanel";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [qualifications, setQualifications] = useState<Qualifications[]>([]);
  const [jobs, setJobs] = useState<JobTitle[]>([]);

  const [fields, setFields] = useState([
    {
      name: "name",
      placeholder: "Название",
      value: "",
      type: "text",
      validate: 3,
    },
    { name: "description", placeholder: "Работа", value: "", type: "select" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [edited, setEdited] = useState<string | null>(null);
  const workerA = useLayoutState((state) => state.workerAdded);
  const setW = useLayoutState((state) => state.setWorkerAdded);
  useEffect(() => {
    getQualifications().then((qualifications) => {
      setQualifications(() => {
        return (
          qualifications?.flatMap((item) =>
            item.qualifications.map((item) => item),
          ) || []
        );
      });      
      setW(false);
      setIsOpen(false);
    });
  }, [workerA, setW]);
  useEffect(() => {
    getJobTitles().then((res) => setJobs(res || []));
  }, []);
  const Validate = async (purpose: "add" | "update") => {
    const res = fields.every((item) => {
      if (!item.validate) return true;
      return item.value.length >= item.validate;
    });
    if (!res) {
      return;
    } else {
      if (purpose === "add") {
        const result = await addQualifications({
          qualificationName: fields[0].value,
          jobTitleId: fields[1].value || qualifications[0].id,
        });
        if (!result) return;
        setW(true);
        setIsOpen(false);
      }
    }
  };
  return (
    <div className="w-full h-full flex flex-col relative overflow-y-scroll">
      <ListPanel isOpen={isOpen} setIsOpen={setIsOpen}>
        <form
          className="border-2 rounded-2xl flex flex-col gap-3 p-4"
          onSubmit={(e) => {
            e.preventDefault();
            Validate("add");
          }}
        >
          {fields.map((field) =>
            field.type === "text" ? (
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
            ) : (
              <select
                key={field.name}
                className="border-2 rounded-xl outline-none p-2"
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
              >
                {jobs.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })}
              </select>
            ),
          )}
          <input
            type="submit"
            value={"Сохранить"}
            className="py-2 w-full border-2 bg-secondary rounded-2xl text-main"
          />
        </form>
      </ListPanel>
      <div className="w-full flex-1 mt-3 flex flex-col gap-3">
        {qualifications[0] ? (
          qualifications.map((qualification) => (
            <ListItem
              title={
                qualification?.name
              }
              key={qualification.id}
              item={qualification}
              deleteItem={deleteQualifications}
              listState={[qualifications, setQualifications]}
              editedState={[edited, setEdited]}
            ></ListItem>
          ))
        ) : (
          <div className="flex justify-center items-center pb-4 text-3xl h-full">
            No qualifications found
          </div>
        )}
      </div>
    </div>
  );
}
