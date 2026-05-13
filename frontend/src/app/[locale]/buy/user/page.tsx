"use client";

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
            <label htmlFor="email" className="flex flex-col">
              <h5>Почта</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="example@gmail.com"
                id="email"
                value={admin.email || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "email")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Ваше имя</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="Павел"
                value={admin.firstName || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "firstName")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Ваша фамилия</h5>
              <input
                placeholder="Иванов"
                value={admin.lastName || ""}
                className="border-2 border-secondary rounded-lg p-3"
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "lastName")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Ваше отчество</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="Иванович"
                value={admin.patronymic || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "patronymic")
                }
              />
            </label>

            <label className="flex flex-col">
              <h5>Логин пользователя</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="От 8 символов..."
                value={admin.login || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "login")
                }
              />
            </label>
            <label className="flex flex-col">
              <h5>Пароль пользователя</h5>
              <input
                className="border-2 border-secondary rounded-lg p-3"
                placeholder="От 8 символов..."
                type="password"
                value={admin.password || ""}
                onChange={(evalue: ChangeEvent<HTMLInputElement>) =>
                  setField(evalue.target.value, "password")
                }
              />
            </label>
            {error && (
              <p>
                Поля заполнены не верно или название для компании уже
                использовалось!
              </p>
            )}
          </form>
          <p className="text-lg max-w-[40%] mb-10">
            Вы находитесь в разделе создания нового пользователя. Пожалуйста,
            заполните все обязательные поля: Email , Логин (уникальное имя
            пользователя), Пароль (придумайте надёжный пароль), а также Имя,
            Фамилию и Отчество (для корректного ведения кадрового учёта и
            обращения в системе). Убедитесь, что email указан верно, пароль и
            логин содержат не менее 8 символов, а все поля на кириллице
            заполнены без ошибок — после сохранения изменить эти данные будет
            возможно только через профиль.
          </p>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
