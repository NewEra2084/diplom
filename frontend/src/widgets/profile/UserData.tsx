import { PencilOff, SquarePen } from "lucide-react";
import { Fields, useProfileStore } from "./store/profileStore";
import { UserStore } from "@/entities/User/model/store";
import { useEffect, useLayoutEffect, useState } from "react";
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
import {
  addWorkerQuery,
  FlatData,
  updateWorkerQuery,
} from "@/entities/User/api/endpoints";
import { useLayoutState } from "@/app/store/useLayoutState";

type Props = {
  className?: string;
  editable?: boolean;
  updateId?: string;
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

  return roleName || "Employee";
}

const rolesType = [
  { id: "ROLE_ADMIN", name: "Admin" },
  { id: "ROLE_MANAGER", name: "Manager" },
  { id: "ROLE_EMPLOYEE", name: "Employee" },
];

export const UserData = ({ className, editable, updateId }: Props) => {
  const setW = useLayoutState((state) => state.setWorkerAdded);
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
    if (!editable) {
      setIsEdit(true);
      setFields({
        login: "",
        email: "",
        firstName: "",
        lastName: "",
        patronymic: "",
        jobTitleId: "",
        qualificationId: "",
        role: "",
        password: "",
      });
      return;
    }

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
  }, [setFields, userData, editable, roleName, setIsEdit]);

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

  const addWorker = async (fields: Fields) => {
    const worker: Omit<Fields, "jobTitleId"> = {
      email: fields.email,
      firstName: fields.firstName,
      lastName: fields.lastName,
      login: fields.login,
      patronymic: fields.patronymic,
      password: fields.password,
      qualificationId: fields.qualificationId,
      role: fields.role,
    };
    const result = await addWorkerQuery(worker);
    if (result) {
      setW(true);
    }
  };
  const updateWorker = async (fields: Fields, id: string) => {
    type a = FlatData<Omit<Fields, "password" | "jobTitleId"> & { id: string }>;
    const worker: a = {
      id: id,
      email: fields.email,
      firstName: fields.firstName,
      lastName: fields.lastName,
      login: fields.login,
      patronymic: fields.patronymic,
      qualificationId: fields.qualificationId,
      role: fields.role,
    };
    const result = await updateWorkerQuery(worker);
    if (result) {
      setW(true);
    }
  };

  const Validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const right = [
      fields.email.trim() !== "" && emailRegex.test(fields.email),
      fields.login.trim() !== "",
      fields.firstName.trim() !== "",
      fields.lastName.trim() !== "",
      fields.patronymic.trim() !== "",
      fields.jobTitleId.trim() !== "",
      fields.qualificationId.trim() !== "",
      fields.role.trim() !== "",
      fields.password &&
        fields.password.trim() !== "" &&
        fields.password.length >= 8,
    ].every(Boolean);
    return right;
  };

  return (
    <section
      className={`${!editable ? "bg-secondary/10 rounded-2xl" : ""} ${className}`}
    >
      {editable && (
        <h2 className="text-2xl lg:text-3xl text-center mb-5 lg:mb-0 lg:text-left">
          Профиль
        </h2>
      )}
      <div className="flex flex-col lg:flex-row">
        {editable && <Avatar />}
        <div
          className={`flex-2 flex flex-col ${isEdit ? "gap-10" : "gap-4"} text-base lg:text-lg pb-3 pt-10 relative ${editable ? "border-x-accent dark:border-x-dark-secondary border-x-2 px-[5vw]" : "px-5"}`}
        >
          <DataField purpose="Почта" field="email" />
          <DataField purpose="Логин" field="login" />
          <DataField purpose="Имя" field="firstName" />
          <DataField purpose="Фамилия" field="lastName" />
          <DataField purpose="Отчество" field="patronymic" />
          <DataField purpose="Пароль" field="password" />
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
            available={isUserApproved("ROLE_ADMIN") && !editable}
            options={rolesType}
            purpose="Роль"
            field="role"
          />
          {!editable && (
            <button
              className="w-full p-3 rounded-xl border-2"
              onClick={() => {
                if (!Validate()) return;
                if (updateId) {
                  updateWorker(fields, updateId);
                } else {
                  addWorker(fields);
                }
              }}
            >
              Сохранить
            </button>
          )}
          {editable && (
            <div className="absolute top-0 right-5">
              {isEdit ? (
                <PencilOff onClick={() => setIsEdit(false)} />
              ) : (
                <SquarePen
                  onClick={() => {
                    setIsEdit(true);
                    Validate();
                  }}
                />
              )}
            </div>
          )}
        </div>
        {editable && <Points />}
      </div>
    </section>
  );
};
