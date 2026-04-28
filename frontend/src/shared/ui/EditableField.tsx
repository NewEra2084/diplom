import { ChangeEvent } from "react";

type Props = {
  text: string | undefined;
  isEdit: boolean;
  purpose?: string;
  type?: string;
  onChange?: (value: string) => void;
};

export const EditableField = ({
  purpose,
  onChange,
  type = "text",
  text,
  isEdit,
}: Props) => {
  return (
    <div className="pl-4 pr-10 flex-2">
      {isEdit ? (
        type === "text" ? (
          <input
            className="w-full border-2 outline-none border-secondary rounded-xl px-2"
            type="text"
            value={text}
            placeholder={purpose || "Введите текст..."}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) onChange(e.target.value);
            }}
            ></input>
          ) : (
            <select
            className="w-full border-2 outline-none border-secondary rounded-xl px-2"
            value={text}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              if (onChange) onChange(e.target.value);
            }}
          >
            <option value="ROLE_ADMIN">Админ</option>
            <option value="ROLE_MANAGER">Менеджер</option>
            <option value="ROLE_EMPLOYEE">Сотрудник</option>
          </select>
        )
      ) : (
        <h5>
          {text?.includes("ROLE")
            ? text === "ROLE_ADMIN"
              ? "Админ"
              : text === "ROLE_MANAGER"
                ? "Менеджер"
                : "Сотрудник"
            : text}
        </h5>
      )}
    </div>
  );
};
