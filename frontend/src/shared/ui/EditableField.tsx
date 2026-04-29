import { useUserStore } from "@/entities/user/model/store";
import { FormLabelInput } from "./FormLabelInput";
import { FormLabelSelect } from "./FormLabelSelect";

type Props = {
  text: string | undefined;
  isEdit: boolean;
  purpose?: string;
  shown?: string;
  costyl: string;
  type?: string;
  onChange?: (value: string) => void;
  options?: { id: string; name: string }[];
};

export const EditableField = ({
  purpose,
  onChange,
  type = "text",
  text,
  costyl,
  shown,
  isEdit,
  options,
}: Props) => {
  const userData = useUserStore((state) => state.user);
  return (
    <div className={`${isEdit? "" : "pl-4"} pr-10 flex-2`}>
      {isEdit ? (
        type === "text" ? (
          <FormLabelInput
            className=""
            title={purpose || ""}
            onChange={onChange}
            value={text}
          />
        ) : (
          <FormLabelSelect
            title={purpose || "string"}
            value={text || ""}
            onChange={(value) => onChange && onChange(value)}
          >
            {options &&
              options?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            {!options && (
              <>
                <option value="ROLE_ADMIN">Админ</option>
                <option value="ROLE_MANAGER">Менеджер</option>
                <option value="ROLE_EMPLOYEE">Сотрудник</option>
              </>
            )}
          </FormLabelSelect>
        )
      ) : (
        <h5>
          {text?.includes("ROLE")
            ? (text === "ROLE_ADMIN"
              ? "Админ"
              : text === "ROLE_MANAGER"
                ? "Менеджер"
                : "Сотрудник")
            : (shown ? userData && userData[costyl] : text)}
        </h5>
      )}
    </div>
  );
};
