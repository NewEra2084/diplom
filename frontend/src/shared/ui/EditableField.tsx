import { FormLabelInput } from "./FormLabelInput";
import { FormLabelSelect } from "./FormLabelSelect";

type Props = {
  text: string | undefined;
  isEdit: boolean;
  purpose?: string;
  type?: string;
  onChange?: (value: string) => void;
  options?: { id: string; name: string }[];
};

export const EditableField = ({
  purpose,
  onChange,
  type = "text",
  text,
  isEdit,
  options,
}: Props) => {
  return (
    <div className="pl-4 pr-10 flex-2">
      {isEdit ? (
        type === "text" ? (
          <FormLabelInput
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
          {type=="select" && text?.includes("ROLE")
            ? (text === "ROLE_ADMIN"
              ? "Админ"
              : text === "ROLE_MANAGER"
                ? "Менеджер"
                : "Сотрудник")
            : text}
        </h5>
      )}
    </div>
  );
};
