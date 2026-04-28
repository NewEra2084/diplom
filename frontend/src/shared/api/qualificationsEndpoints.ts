import { getTemplate } from "./client";

export type Qualifications = {
  id: string;
  name: string;
};

export type Qualification = {
  id: string;
  qualifications: Qualifications[];
  name: string;
};

export const getQualifications = async () => {
  const { data, status } = await getTemplate<Qualification[]>(
    "/manager/get/qualification",
  );
  if (status >= 400) {
    return;
  }
  return data;
};
export const getSpreadQualifications = async (jobTitleId: string) => {
  const data = await getQualifications();
  if (!data) return;
  const needed = data.find((item) => item.id === jobTitleId);
  if (needed) {
    return needed.qualifications.map((q) => ({
      id: q.id,
      name: q.name,
    }));
  }
};
