"use client";

import { useState } from "react";
import { useUserStore } from "@/entities/user/model/store";
import { useRouter } from "@/i18n/navigation";
import { auth } from "@/features/auth/endpoints";
import { FormLabelInput } from "@/shared/ui/FormLabelInput";

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
  const fetchUser = useUserStore((store) => store.fetchUser);
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

    fetchUser();
    router.replace("/");
  };

  return (
    <div className="flex h-full divide-x-2">
      <div className="hidden lg:block lg:flex-3"></div>
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
        <button
          className="rounded-xl hover:w-full transition-all hover:animate-pulse bg-secondary text-main w-[50%] py-4"
          type="submit"
        >
          Вход
        </button>
      </form>
    </div>
  );
}
