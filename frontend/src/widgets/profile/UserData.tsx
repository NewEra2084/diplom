import { PencilOff, SquarePen } from "lucide-react";
import { useProfileStore } from "../../app/[locale]/profile/store/profileStore";
import { useUserStore } from "@/entities/user/model/store";
import { useEffect } from "react";
import { DataField } from "./components/DataField";

type Props = {
  className?: string;
  editable?: boolean;
};

const Validate = () => {};

export const UserData = ({ className, editable = true }: Props) => {
  const setIsEdit = useProfileStore((state) => state.changeIsEdit);
  const isEdit = useProfileStore((state) => state.isEdit);
  const setFields = useProfileStore((state) => state.setFields);

  const points = useUserStore((state) => state.points);
  const userData = useUserStore((state) => state.user);
  useEffect(() => {
    setFields({
      login: userData?.login,
      email: userData?.email,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      patronymic: userData?.patronymic,
      jobTitleName: userData?.jobTitleName,
      qualificationName: userData?.qualificationName,
      role: userData?.rolesName[0],
    });
  }, [setFields, userData]);
  return (
    <section className={className}>
      <h2 className="text-3xl">Профиль</h2>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-2 flex flex-col gap-4 text-lg border-x-2 pt-10 relative border-accent pl-[5vw]">
          <DataField available={true} purpose="Почта" field="email" />
          <DataField available={true} purpose="Логин" field="login" />
          <DataField available={true} purpose="Имя" field="firstName" />
          <DataField available={true} purpose="Фамилия" field="lastName" />
          <DataField available={true} purpose="Отчество" field="patronymic" />
          <DataField
            available={false}
            purpose="Название должности"
            field="jobTitleName"
          />
          <DataField
            available={false}
            purpose="Название квалификации"
            field="qualificationName"
          />
          <DataField
            available={false}
            type="select"
            purpose="Роль сотрудника"
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
        <div className="p-4 flex flex-col justify-center items-center">
          <span>Очки</span>
          <div className={` text-2xl relative`}>
            <div
              className={`absolute flex justify-center items-center inset-0 rounded-full outline-8 p-10 ${points > 100 ? "outline-accent" : points > 50 ? "outline-accent/50" : "outline-accent/20"}`}
            >
              <span className="text-3xl">{points}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
