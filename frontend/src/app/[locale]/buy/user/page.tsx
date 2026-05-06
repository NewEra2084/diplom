"use client"

import { BuyBody } from "@/widgets/BuyBody";
import { useBuyStore } from "../BuyPageStore";
import { ChangeEvent, useState } from "react";
import { useRouter } from "@/i18n/navigation";

function Page() {
  const admin = useBuyStore((store) => store.admin);
  const setField = useBuyStore((store) => store.setAdminField);
  const router = useRouter();
  const [error, setError] = useState(false);

  const Validate = () => {
    if (
      !admin.email ||
      !admin.firstName ||
      !admin.lastName ||
      !admin.patronymic ||
      admin.login == undefined ||
      admin.login?.length < 8 ||
      admin.password == undefined ||
      admin.password?.length < 8
    ) {
      setError(true);
      console.log(admin);
      
      return;
    }
    setError(false);
    router.push("company");
  };

  return (
    <div>
      <BuyBody link="company" text="Дальше" onClick={Validate}>
        <h3 className="text-3xl mb-5">Создание владельца компании</h3>
        <div className="flex justify-between">
          <form className="flex flex-col gap-4 w-[40%]">
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Почта"
              value={admin.email || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "email")
              }
              />
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="имя"
              value={admin.firstName || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "firstName")
              }
              />
            <input
              placeholder="Фамилия"
              value={admin.lastName || ""}
              className="border-2 border-secondary rounded-lg p-3"
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "lastName")
              }
            />
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Отчество"
              value={admin.patronymic || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "patronymic")
              }
              />
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Логин"
              value={admin.login || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "login")
              }
              />
            <input
              className="border-2 border-secondary rounded-lg p-3"
              placeholder="Пароль"
              type="password"
              value={admin.password || ""}
              onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                setField(evalue.target.value, "password")
              }
            />
            {error && <p>Поля заполнены не верно!</p>}
          </form>
          <p className="text-lg max-w-[40%] mb-10">
            Вы находитесь в разделе создания нового пользователя. Пожалуйста,
            заполните все обязательные поля: Email , Логин (уникальное имя пользователя), Пароль
            (придумайте надёжный пароль), а также Имя, Фамилию и Отчество (для
            корректного ведения кадрового учёта и обращения в системе).
            Убедитесь, что email указан верно, пароль и логин содержат не менее 8
            символов, а все поля на кириллице заполнены без ошибок — после
            сохранения изменить эти данные будет возможно только через профиль.
          </p>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
