import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Fields = {
  email: string | undefined;
  login: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  patronymic: string | undefined;
  jobTitleName: string | undefined;
  qualificationName: string | undefined;
  role: string | undefined;
};

type ProfileStore = {
  fields: Fields;
  isEdit: boolean;
  changeIsEdit: (value: boolean) => void;
  setFields: (value: Fields) => void;
  changeField: (field: string, value: string) => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      fields: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        login: undefined,
        patronymic: undefined,
        jobTitleName: undefined,
        qualificationName: undefined,
        role: undefined,
      },
      isEdit: false,
      changeIsEdit: (value) => {
        set(() => ({ isEdit: value }));
      },
      setFields: (value) => {
        set((prev) => ({ ...prev, fields: value }));
      },
      changeField: (field, value) => {
        set((prev) => ({
          ...prev,
          fields: { ...prev.fields, [field]: value },
        }));
      },
    }),
    { name: "profileData" },
  ),
);
