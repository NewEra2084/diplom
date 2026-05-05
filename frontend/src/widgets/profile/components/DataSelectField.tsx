import { Fields, useProfileStore } from "@/widgets/profile/store/profileStore";
import { UserStore } from "@/entities/User/model/store";
import { FormLabelSelect } from "@/shared/ui/FormLabelSelect";

export type FieldKey = keyof Fields;
type Props = {
  field: FieldKey;
  purpose: string;
  shown?: string;
  available: boolean;
  trueName?: "qualificationName" | "jobTitleName";
  type?: "text" | "select";
  options?: { id: string; name: string }[];
};

export const DataSelectField = ({
  field,
  options = [],
  trueName,
  available = true,
  purpose,
}: Props) => {
  const changeField = useProfileStore((state) => state.changeField);
  const isEdit = useProfileStore((state) => state.isEdit);
  const fields = useProfileStore((state) => state.fields);
  const userData = UserStore((state) => state.user);

  return (
    <div className="flex h-8">
      {(!isEdit || !available) && <h5 className="flex-1">{purpose}:</h5>}
      {available && isEdit ? (
        <FormLabelSelect
          title={purpose || "string"}
          className={`pr-10 flex-2`}
          value={fields[field] || ""}
          onChange={(value: string) => {
            changeField(field, value);
          }}
        >
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </FormLabelSelect>
      ) : (
        <h5 className="flex-2">
          {(userData && userData[trueName]) || fields[field]}
        </h5>
      )}
    </div>
  );
};
