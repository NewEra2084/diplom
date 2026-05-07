import { Fields, useProfileStore } from "@/widgets/profile/store/profileStore";
import { FormLabelInput } from "@/shared/ui/FormLabelInput";

export type FieldKey = keyof Fields;
type Props = {
  field: FieldKey;
  purpose: string;
  available?: boolean;
};

export const DataField = ({ field, available = true, purpose }: Props) => {
  const changeField = useProfileStore((state) => state.changeField);
  const isEdit = useProfileStore((state) => state.isEdit);
  const fields = useProfileStore((state) => state.fields);
  
  return (
    <div className="flex h-8">
      {(!isEdit || !available) && <h5 className="flex-1">{purpose}:</h5>}
      {available && isEdit ? (
        <FormLabelInput
          className="flex-2"
          title={purpose || ""}
          onChange={(value: string) => {
            changeField(field, value);
          }}
          value={fields[field]}
        />
      ) : (
        <h5 className="flex-2">{fields[field]}</h5>
      )}
    </div>
  );
};
