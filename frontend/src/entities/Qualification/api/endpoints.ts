import { deleteTemplate, getTemplate, postTemplate } from "@/shared/api/client";
import { Qualification } from "../model/types";

export const getQualifications = async () => {
  const { data, status } = await getTemplate<Qualification[]>(
    "/manager/get/qualification",
  );
  if (status >= 400) {
    return;
  }
  return data;
};
export const addQualifications = async (qualification: {qualificationName: string, jobTitleId:string}) => {
  const { status } = await postTemplate(
    `/admin/add/qualification`,
    qualification
  );
  if (status === 200) {
    return true;
  }else{
    return false;
  }
};
export const deleteQualifications = async (qualificationId: string) => {
  const { status } = await deleteTemplate(
    `/admin/delete/qualification/${qualificationId}`
  );
  if (status === 200) {
    return true;
  }else{
    return false;
  }
};