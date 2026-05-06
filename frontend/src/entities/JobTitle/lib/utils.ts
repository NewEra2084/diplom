import { getJobTitles } from "../api/endpoints";

export const jobIdFromName = async (name: string): Promise<string> => {
  console.log(name );
  
  if(name === "" || "unknown"){
    return ''
  }
  const response = await getJobTitles();
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