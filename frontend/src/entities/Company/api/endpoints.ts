import { Company } from "@/app/[locale]/buy/types";
import { postTemplate } from "@/shared/api/client";

export const createCompany = async (companyData: Company) => {
  const response = await postTemplate("/company/create", companyData);
  if (response.status >= 400) {
    return false;
  } else if (response.status === 200) {
    return true;
  }
  return false;
};
export const updateCompany = (
  companyData: Omit<Company, "admin" | "subscribeFireDate">,
) => {
  postTemplate("/company/update", companyData);
};
