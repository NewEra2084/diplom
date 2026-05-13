import { getCompany, updateCompany } from "@/entities/Company/api/endpoints";
import { UserStore } from "@/entities/User/model/store";
import { PencilOff, SquarePen } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type fields = {
  id: string;
  name: string;
  address: string;
  fieldOfEmployment: string;
  subscribeFireDate: string;
};

const Validate = (fields: fields) => {
  updateCompany({
    id: fields.id,
    name: fields.name,
    address: fields.address,
    fieldOfEmployment: fields.fieldOfEmployment,
  });
};

export const CompanyData = () => {
  const t = useTranslations("CompanyData");
  const userData = UserStore((store) => store.user);
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState<fields>({
    id: "",
    name: "",
    address: "",
    fieldOfEmployment: "",
    subscribeFireDate: "",
  });
  useEffect(() => {
    (async () => {
      const companyData = await getCompany();
      if (typeof companyData == "boolean") return;
      setFields(companyData as fields);
    })();
  }, []);
  return (
    <section>
      <h2 className="text-3xl mb-3">Компания</h2>
      <div className="border-x-2 border-accent relative px-10 pt-5 flex flex-col text-lg items-center">
        {isEdit ? (
          <div className="flex flex-col gap-3">
            <label className="flex gap-10 items-center justify-between">
              <h5>Название компании</h5>
              <input
                className="border-2 rounded-xl border-secondary p-2"
                type="text"
                value={fields.name}
                onChange={(e) =>
                  setFields((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>
            <label className="flex gap-10 items-center justify-between">
              <h5>Адрес компании</h5>
              <input
                className="border-2 rounded-xl border-secondary p-2"
                type="text"
                value={fields.address}
                onChange={(e) =>
                  setFields((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            </label>
            <label className="flex gap-10 items-center justify-between">
              <h5>Сфера деятельности</h5>
              <input
                className="border-2 rounded-xl border-secondary p-2"
                type="text"
                value={fields.fieldOfEmployment}
                onChange={(e) =>
                  setFields((prev) => ({
                    ...prev,
                    fieldOfEmployment: e.target.value,
                  }))
                }
              />
            </label>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {Object.entries(fields)
              .filter(([key]) => key !== "id" && key !== "subscribeFireDate")
              .map(([key, value]) => (
                <div key={key}>
                  <h4>
                    {t(key)}: {value}
                  </h4>
                </div>
              ))}
            {userData?.rolesName.includes("ROLE_ADMIN") && (
              <h4>Дата окончания подписки: {fields.subscribeFireDate}</h4>
            )}
          </div>
        )}
        <div className="absolute top-0 right-5">
          {isEdit ? (
            <PencilOff
              onClick={() => {
                Validate(fields);
                setIsEdit(false);
              }}
            />
          ) : (
            <SquarePen
              onClick={() => {
                setIsEdit(true);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
