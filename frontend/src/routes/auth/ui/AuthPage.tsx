"use client";

import { useState } from "react";
import { auth } from "../lib/endpoints";
import { useUserStore } from "@/entities/user/model/store";

type fields = {
  login: string;
  password: string;
};

export const AuthPage = () => {
  const [fields, setField] = useState<fields>({
    login: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);
  const fetchUser = useUserStore(store=>store.fetchUser);

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
    }
    fetchUser();
    window.location.href = "/";
  };

  return (
    <>
      <div>{error}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          value={fields.login}
          onChange={(e) =>
            setField((prev) => ({ ...prev, login: e.target.value }))
          }
        />
        <input
          type="text"
          value={fields.password}
          onChange={(e) =>
            setField((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type="submit">Вход</button>
      </form>
    </>
  );
};
