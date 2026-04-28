import { Fields, useProfileStore } from "@/app/[locale]/profile/store/profileStore";
import { useUserStore } from "@/entities/user/model/store";
import { EditableField } from "@/shared/ui/EditableField";

type FieldKey = keyof Fields;
type Props = {
  field: FieldKey;
  purpose: string;
  available: boolean;
  type?: string
};

export const DataField = ({ field, type, available, purpose }: Props) => {
  const changeField = useProfileStore((state) => state.changeField);
  const isEdit = useProfileStore((state) => state.isEdit);
  const fields = useProfileStore((state) => state.fields);
  const userData = useUserStore((state) => state.user);
  return (
    <div className="flex h-8">
      {!isEdit && <h5 className="flex-1">{purpose}:</h5>}
      {available ? (
        <EditableField
          purpose={purpose}
          text={fields[field]}
          isEdit={isEdit}
          onChange={(value: string) => {
            changeField(field, value);
          }}
        />
      ) : userData?.rolesName.includes("ROLE_ADMIN") ? (
        <EditableField
          purpose={purpose}
          text={fields[field]}
          type={type}
          isEdit={isEdit}
          onChange={(value: string) => {
            changeField(field, value);
          }}
        />
      ) : (
        <h5>{fields[field]}</h5>
      )}
    </div>
  );
};
