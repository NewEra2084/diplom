"use client";

import { PencilOff, SquarePen } from "lucide-react";
import { useProfileStore } from "@/app/[locale]/profile/store/profileStore";
import { UserStore } from "@/entities/User/model/store";
import { useEffect, useState } from "react";
import { DataField } from "./components/DataField";
import {
  getSpreadQualifications,
  qualificationIdFromName,
} from "@/entities/Qualification/lib/utils";
import { jobIdFromName } from "@/entities/JobTitle/lib/utils";
import { getJobTitles } from "@/entities/JobTitle/api/endpoints";
import { Points } from "./components/Points";
import { DataSelectField } from "./components/DataSelectField";
import { Avatar } from "./components/Avatar";
import { role } from "@/entities/User/model/types";

type Props = {
  className?: string;
  editable?: boolean;
};

type QualificationOption = {
  id: string;
  name: string;
};
type jobTitlesOption = {
  id: string;
  name: string;
};
function isUserApproved(role: role) {
    const userData = UserStore((state) => state.user);
    return userData?.rolesName.includes(role) || false;
  }

  function userRoleByName() {
    const userData = UserStore((state) => state.user);

    const roleName = rolesType.find(
      (item) => item.id === userData?.rolesName[0],
    )?.name;
    console.log(roleName);
    

    return roleName || "Employee";
  }
const Validate = () => {};

const rolesType = [
  { id: "ROLE_ADMIN", name: "Admin" },
  { id: "ROLE_MANAGER", name: "Manager" },
  { id: "ROLE_EMPLOYEE", name: "Employee" },
];

export const UserData = ({ className, editable = true }: Props) => {
  const setIsEdit = useProfileStore((state) => state.changeIsEdit);
  const isEdit = useProfileStore((state) => state.isEdit);
  const fields = useProfileStore((state) => state.fields);
  const setFields = useProfileStore((state) => state.setFields);
  const [qualifications, setQualifications] = useState<QualificationOption[]>(
    [],
  );
  const [jobTitles, setJobTitles] = useState<jobTitlesOption[]>([]);
  const userData = UserStore((state) => state.user);
  const roleName = userRoleByName();

  useEffect(() => {
    if (!editable) return;

    (async () => {
      setFields({
        login: userData?.login || "",
        email: userData?.email || "",
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        patronymic: userData?.patronymic || "",
        jobTitleId: await jobIdFromName(userData?.jobTitleName || ""),
        qualificationId: await qualificationIdFromName(
          userData?.qualificationName || "",
          userData?.jobTitleName || "",
        ),
        role: roleName,
      });
    })();
  }, [setFields, userData, editable, roleName]);

  useEffect(() => {
    (async () => {
      const res = await getSpreadQualifications(fields.jobTitleId);

      if (res) {
        setQualifications(res);
      }
    })();
  }, [fields.jobTitleId]);

  useEffect(() => {
    (async () => {
      const res = await getJobTitles();

      if (res) {
        setJobTitles(res);
      }
    })();
  }, []);

  

  return (
    <section className={className}>
      <h2 className="text-2xl lg:text-3xl text-center mb-5 lg:mb-0 lg:text-left">
        Профиль
      </h2>
      <div className="flex flex-col lg:flex-row">
        <Avatar />
        <div
          className={`flex-2 flex flex-col ${isEdit ? "gap-10" : "gap-4"} text-base lg:text-lg pb-3 border-x-2 pt-10 relative border-x-accent dark:border-x-dark-secondary pl-[5vw]`}
        >
          <DataField purpose="Почта" field="email" />
          <DataField purpose="Логин" field="login" />
          <DataField purpose="Имя" field="firstName" />
          <DataField purpose="Фамилия" field="lastName" />
          <DataField purpose="Отчество" field="patronymic" />
          <DataSelectField
            available={isUserApproved("ROLE_ADMIN")}
            options={jobTitles}
            trueName="jobTitleName"
            purpose="Должность"
            field="jobTitleId"
          />
          <DataSelectField
            available={isUserApproved("ROLE_ADMIN")}
            options={qualifications}
            trueName="qualificationName"
            purpose="Квалификация"
            field="qualificationId"
          />
          <DataSelectField
            available={false}
            options={rolesType}
            purpose="Роль"
            field="role"
          />
          <div className="absolute top-0 right-5">
            {editable &&
              (isEdit ? (
                <PencilOff onClick={() => setIsEdit(false)} />
              ) : (
                <SquarePen
                  onClick={() => {
                    setIsEdit(true);
                    Validate();
                  }}
                />
              ))}
          </div>
        </div>
        <Points />
      </div>
    </section>
  );
};
