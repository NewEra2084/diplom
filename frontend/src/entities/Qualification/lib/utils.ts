import { jobIdFromName } from "@/entities/JobTitle/lib/utils";
import { getQualifications } from "../api/endpoints";

export const getSpreadQualifications = async (jobTitleId: string) => {
  const data = await getQualifications();
  console.log(data);
  
  if (!data) return;
  const needed = data.find((item) => item.id === jobTitleId);
  if (needed) {
    return needed.qualifications.map((q) => ({
      id: q.id,
      name: q.name,
    }));
  }
};

export const qualificationIdFromName = async (
  name: string,
  jobTitleName: string,
): Promise<string> => {
  if (name === "" || "unknown") {
    return "";
  }
  const jobTitleId = await jobIdFromName(jobTitleName);
  const response = await getSpreadQualifications(jobTitleId);
  if (response) {
    const res = response.find((item) => item.name === name);
    if (res) {
      return res.id;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};
