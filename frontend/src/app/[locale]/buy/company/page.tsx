"use client";

import { BuyBody } from "@/widgets/BuyBody";
import { useBuyStore } from "../BuyPageStore";
import { ChangeEvent, useState } from "react";
import { useRouter } from "@/i18n/navigation";

function Page() {
  const { address, fieldOfEmployment, name } = useBuyStore();
  const setField = useBuyStore((store) => store.setCompanyField);
  const router = useRouter();
  const [error, setError] = useState(false);

  const Validate = () => {
    if (
      !address ||
      !fieldOfEmployment ||
      name == undefined ||
      name?.length < 8
    ) {
      setError(true);
      return;
    }
    setError(false);
    router.push("paying");
  };

  return (
    <div>
      <BuyBody link="company" text="Дальше" onClick={Validate}>
        <h3 className="text-3xl mb-5">Создание компании</h3>
        <div className="flex justify-between">
          <form className="flex flex-col gap-4 w-[40%]">
            <label className="flex flex-col">
              <h5>Адрес компании</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="г.Москва, ул. Кольцо, д. 120"
                value={address || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "address")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Название компании</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="От 8 символов..."
                value={name || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "name")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Сфера деятельности</h5>
              <input
                placeholder="Услуги разработки"
                value={fieldOfEmployment || ""}
                className="border-2 border-secondary rounded-lg p-3"
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "fieldOfEmployment")
                }
              />
            </label>
            {error && <p>Поля заполнены не верно!</p>}
          </form>
          <p className="text-lg max-w-[40%] mb-10">
            Сейчас вы заполняете карточку вашей компании. Укажите её полное
            название (без сокращений, именно оно будет отображаться в
            документах), юридический адрес (по месту регистрации), сферу
            деятельности (например: разработка ПО, логистика, ритейл). Обратите
            внимание: все поля обязательны. После сохранения данные компании
            станут основными для всех дальнейших операций, включая создание
            сотрудников и отчётность.
          </p>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
