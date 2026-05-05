import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Fields = {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  jobTitleId: string;
  qualificationId: string;
  role: string;
};

type ProfileStore = {
  fields: Fields;
  isEdit: boolean;
  changeIsEdit: (value: boolean) => void;
  setFields: (value: Fields) => void;
  changeField: (field: string, value: string) => void;
};

export const useProfileStore = create<ProfileStore>(
    (set) => ({
      fields: {
        email: "",
        firstName: "",
        lastName: "",
        login: "",
        patronymic: "",
        jobTitleId: "",
        qualificationId: "",
        role: "",
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
  );
