import axios from "axios";
import { BACKEND_API } from "../config/env";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: BACKEND_API,
  timeout: 20000,
});

api.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("accessToken");
  const tokenRefresh = localStorage.getItem("refreshToken");
  if(config.url?.includes("/auth/update_tokens")){
    return config;
  }
  if (token && Date.now() / 1000 > jwtDecode(token).exp!) {
      try {
        const refresh = await postTemplate("/auth/update_tokens", {
          refreshToken: tokenRefresh,
        });
        console.log(refresh);
        token = refresh.data.accessToken;
        localStorage.setItem("accessToken", refresh.data.accessToken);
        localStorage.setItem("refreshToken", refresh.data.refreshToken);
        console.log("end");
      } catch(error) {        
        // window.location.href = "/auth";
        return Promise.reject(error);
      }
    }else if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: Error) => {
    console.log("api error -> ", error.name, error.message);
    return error;
  },
);

const postTemplate = async (
  url: string,
  info = {},
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.post(url, info, {
      headers: {
        "Content-Type": contentType
      },
    });
    
    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};

const getTemplate = async (url: string, contentType = "application/json") => {
  try {
    const { data, status } = await api.get(url, {
      headers: {
        "Content-Type": contentType,
      },
    });
    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};

export { postTemplate, getTemplate };
