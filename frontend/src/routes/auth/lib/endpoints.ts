import { postTemplate } from "@/shared/api/client";

type auth = {
  login: string,
  password: string
}

type response = {
  data: {
    accessToken: string,
    refreshToken: string
  },
  status: number
}

const auth = async (data: auth) : Promise<number>=>{
  const res : response = await postTemplate("/auth/sign_in", data);
  
  if(res.status === 200){
    localStorage.setItem("accessToken", res.data.accessToken)
    localStorage.setItem("refreshToken", res.data.refreshToken)
    return 200;
  }else{
    return res.status;
  }
}

export {auth}