"use client";

import { BuyBody } from "@/widgets/BuyBody";
import { useBuyStore } from "../BuyPageStore";
import { ChangeEvent, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { createCompany } from "@/entities/Company/api/endpoints";

type fields = {
  number: string | null;
  date: string | null;
  cvv: string | null;
};

const formatCardNumber = (value: string): string => {
  // Удаляем всё, кроме цифр
  const numbers = value.replace(/\D/g, "");

  // Ограничиваем 16 символами
  const truncated = numbers.slice(0, 16);

  // Группируем по 4 символа
  const groups = truncated.match(/.{1,4}/g);

  return groups ? groups.join(" ") : truncated;
};

function Page() {
  const [fields, setField] = useState<fields>({
    number: null,
    date: null,
    cvv: null,
  });
  const router = useRouter();
  const [error, setError] = useState(false);
  const { address, admin, fieldOfEmployment, name } = useBuyStore();

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    // Удаляем пробелы, оставляем только цифры
    const numbers = rawValue.replace(/\D/g, "");

    // Ограничиваем 16 цифрами
    if (numbers.length <= 16) {
      const formatted = formatCardNumber(numbers);
      setField((prev) => ({ ...prev, number: formatted }));
    }
  };

  const Validate = () => {
    const isNotFull = [
      name?.length < 8,
      !admin.email ||
        !admin.firstName ||
        !admin.lastName ||
        !admin.patronymic ||
        admin.login == undefined ||
        admin.login?.length < 8 ||
        admin.password == undefined ||
        admin.password?.length < 8,
    ].some(Boolean);
    if (isNotFull || !address || !name || !fieldOfEmployment) {
      setError(true);
      return;
    }
    if (
      (fields.number && fields.number.length < 16) ||
      (fields.date && fields.date.length < 8) ||
      (fields.cvv && fields.cvv.length < 3)
    ) {
      setError(true);
      console.log("b");
      return;
    }
    setError(false);
    createCompany({
      address,
      admin,
      fieldOfEmployment,
      name,
      subscribeFireDate: new Date(Date.now()).toISOString().split("T")[0],
    }).then((res) => {
      if (res === true) {
        router.push("success");
      } else {
        setError(true);
      }
    });
  };

  return (
    <div>
      <BuyBody link="company" text="Дальше" onClick={Validate}>
        <h3 className="text-3xl mb-5">Оплата</h3>
        <div className="flex justify-between">
          <form className="flex flex-col gap-4 w-[40%]">
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Номер"
              value={fields.number || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(evalue)
              }
            />
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Дата окончания"
              value={fields.date || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) => {
                const value = evalue.target.value;
                if (value.length <= 8) {
                  setField((prev) => ({ ...prev, date: value }));
                }
              }}
            />
            <input
              placeholder="CVV"
              value={fields.cvv || ""}
              className="border-2 border-secondary rounded-lg p-3"
              onChange={(evalue: ChangeEvent<HTMLInputElement>) => {
                const value = evalue.target.value;
                value.length <= 3 &&
                  setField((prev) => ({ ...prev, cvv: value }));
              }}
            />
            {error && <p>Поля заполнены не верно!</p>}
          </form>
          <p className="text-lg max-w-[40%] mb-10">
            Сейчас вы находитесь на этапе добавления банковской карты для оплаты
            подписки. Пожалуйста, введите номер карты (16 цифр без пробелов),
            срок действия в формате ММ/ГГ, CVV-код (3 цифры на обратной стороне)
            и имя держателя (латиницей, как на самой карте). Убедитесь, что все
            данные введены верно, а срок действия карты не истёк — от этого
            зависит успешность списания средств. Никогда не передавайте эти
            данные третьим лицам; наша система не хранит данные вашей карты и не
            сможет использовать их в дальнейшем без вашего вмешательства
          </p>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
