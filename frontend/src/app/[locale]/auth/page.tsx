"use client";

import { useState } from "react";
import { UserStore } from "@/entities/User/model/store";
import { Link, useRouter } from "@/i18n/navigation";
import { auth } from "@/features/auth/endpoints";
import { FormLabelInput } from "@/shared/ui/FormLabelInput";
import { FormButton } from "@/shared/ui/FormButton";

type fields = {
  login: string;
  password: string;
};

export default function Page() {
  const [fields, setField] = useState<fields>({
    login: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);
  const setUser = UserStore((store) => store.setUser);
  const router = useRouter();

  const handleSubmit = async () => {
    if (fields.login == null || fields.password == null) {
      setError("Не все поля заполнены");
      return;
    }
    const response = await auth({
      login: fields.login,
      password: fields.password,
    });

    if (response >= 400) {
      setError("Не корректные данные");
      return;
    }

    setUser();
    router.replace("/");
  };

  return (
    <div className="flex h-full divide-x-2 min-h-[50vh]">
      <div className="hidden lg:flex lg:flex-3 items-center flex-col justify-center">
        <h1 className="text-4xl mb-5">Присоединяйтесь к своей компании!</h1>
        <Link href={"/buy"} className="text-xl text-gray-500"><span className="opacity-50">Или</span> <span className="opacity-50 hover:opacity-100">создайте свою</span></Link>
      </div>
      <form
        className="flex gap-10 flex-1 lg:pl-4 flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Авторизация</h2>
        <FormLabelInput
          title="Логин"
          value={fields.login}
          onChange={(evalue: string) =>
            setField((prev) => ({ ...prev, login: evalue }))
          }
        />
        <FormLabelInput
          title="Пароль"
          value={fields.password}
          type="password"
          onChange={(evalue: string) =>
            setField((prev) => ({ ...prev, password: evalue }))
          }
        />
        <div className="text-accent dark:text-dark-accent">{error}</div>
        <FormButton text="Вход" />
      </form>
    </div>
  );
}
