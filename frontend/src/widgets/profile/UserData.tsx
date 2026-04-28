import { PencilOff, SquarePen } from "lucide-react";
import { useProfileStore } from "../../app/[locale]/profile/store/profileStore";
import { useUserStore } from "@/entities/user/model/store";
import { useEffect, useState } from "react";
import { DataField } from "./components/DataField";
import { getQualifications, getSpreadQualifications } from "@/shared/api/qualificationsEndpoints";
import { getJobTitles } from "@/shared/api/jobTitlesEndpoints";

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

const Validate = () => {};

const jobIdFromName = async (name: string): Promise<string> => {
  const response = await getJobTitles();
  if (response) {
    const res = response.find((item) => item.name === name);
    if (res) {
      return res.id;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};
const qualificationIdFromName = async (name: string, jobTitleName:string): Promise<string> => {
  const jobTitleId = await jobIdFromName(jobTitleName)
  const response = await getSpreadQualifications(jobTitleId);
  if (response) {
    const res = response.find((item) => item.name === name);
    if (res) {
      return res.id;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};

export const UserData = ({ className, editable = true }: Props) => {
  const setIsEdit = useProfileStore((state) => state.changeIsEdit);
  const isEdit = useProfileStore((state) => state.isEdit);
  const fields = useProfileStore((state) => state.fields);
  const setFields = useProfileStore((state) => state.setFields);
  const [qualifications, setQualifications] = useState<QualificationOption[]>(
    [],
  );
  const [jobTitles, setJobTitles] = useState<jobTitlesOption[]>([]);
  const points = useUserStore((state) => state.points);
  const userData = useUserStore((state) => state.user);
  useEffect(() => {
    (async () => {
      setFields({
        login: userData?.login || "",
        email: userData?.email || "",
        firstName: userData?.firstName || "",
        lastName: userData?.lastName || "",
        patronymic: userData?.patronymic || "",
        jobTitleId: await jobIdFromName(userData?.jobTitleName || ""),
        qualificationId: await qualificationIdFromName(userData?.qualificationName || "", userData?.jobTitleName || ""),
        role: userData?.rolesName[0] || "",
      });
    })();
  }, [setFields, userData]);

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
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-full relative group bg-gray-500 peer w-36 h-36 lg:w-56 lg:h-56 mb-10">
            <div className="absolute rounded-full inset-0 bg-secondary/10 hidden group-hover:flex items-center justify-center">
              <SquarePen
                size={45}
                onClick={() => {
                  setIsEdit(true);
                  Validate();
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex-2 flex flex-col ${isEdit ? "gap-10" : "gap-4"} text-base lg:text-lg pb-3 border-x-2 pt-10 relative border-x-accent pl-[5vw]`}
        >
          <DataField available={true} purpose="Почта" field="email" />
          <DataField available={true} purpose="Логин" field="login" />
          <DataField available={true} purpose="Имя" field="firstName" />
          <DataField available={true} purpose="Фамилия" field="lastName" />
          <DataField available={true} purpose="Отчество" field="patronymic" />
          <DataField
            available={false}
            options={jobTitles}
            shown={userData?.jobTitleName || ""}
            type="select"
            purpose="Должность"
            field="jobTitleId"
          />
          <DataField
            available={false}
            options={qualifications}
            shown={userData?.qualificationName || ""}
            type="select"
            purpose="Квалификация"
            field="qualificationId"
          />
          <DataField
            available={false}
            type="select"
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
        <div className="p-10 flex flex-col justify-center items-center">
          <span className="text-lg mb-4">Очки</span>
          <div className={`text-2xl`}>
            <div
              className={`flex justify-center items-center inset-0 rounded-full outline-8 p-10 ${points > 100 ? "outline-accent" : points > 50 ? "outline-accent/50" : "outline-accent/20"}`}
            >
              <span className="text-3xl">{points}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
