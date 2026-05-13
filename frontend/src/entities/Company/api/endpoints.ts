import { Company } from "@/app/[locale]/buy/types";
import { getTemplate, postTemplate, putTemplate } from "@/shared/api/client";

export const createCompany = async (companyData: Company) => {
  const response = await postTemplate("/company/create", companyData);
  if (response.status >= 400) {
    return false;
  } else if (response.status === 200) {
    return true;
  }
  return false;
};
export const getCompany = async () => {
  const response = await getTemplate("/company/get");
  if (response.status >= 400) {
    throw new Error()
  } else {
    return response.data;
  }
};
export const updateCompany = (
  companyData: Omit<Company, "admin" | "subscribeFireDate">,
) => {
  putTemplate("/company/update", companyData);
};
