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
  if (
    config.url?.includes("/auth/update_tokens") ||
    config.url?.includes("/auth/sign_in")
  ) {
    return config;
  }
  if (
    config.method === "patch" ||
    config.method === "put" ||
    config.method === "post" ||
    config.method === "delete"
  ) {
    const conf = window.confirm("Подтвердите действие");
    if (!conf) {
      return Promise.reject("Operation cancelled");
    }
  }
  if (token && Date.now() / 1000 > jwtDecode(token).exp!) {
    try {
      const refresh = await postTemplate("/auth/update_tokens", {
        refreshToken: tokenRefresh,
      });
      token = refresh.data.accessToken;
      localStorage.setItem("accessToken", refresh.data.accessToken);
      localStorage.setItem("refreshToken", refresh.data.refreshToken);
    } catch (error) {
      return Promise.reject(error);
    }
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: Error) => {
    console.log("api error -> ", error.name, error.message);
    return error;
  },
);

const deleteTemplate = async (
  url: string,
  body = {},
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.delete(url, {
      headers: {
        "Content-Type": contentType,
      },
      data: body,
    });

    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};
const putTemplate = async (
  url: string,
  info = {},
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.put(url, info, {
      headers: {
        "Content-Type": contentType,
      },
    });

    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};
const patchTemplate = async (
  url: string,
  info = {},
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.patch(url, info, {
      headers: {
        "Content-Type": contentType,
      },
    });

    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};
const postTemplate = async (
  url: string,
  info = {},
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.post(url, info, {
      headers: {
        "Content-Type": contentType,
      },
    });

    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};
const postMultyPartTemplate = async (
  url: string,
  info: FormData,
  contentType = "multipart/form-data",
) => {
  try {
    const { data, status } = await api.post(url, info, {
      headers: {
        "Content-Type": contentType,
      },
    });

    return { data: data, status: status };
  } catch (error) {
    throw error;
  }
};

const getTemplate = async <T>(
  url: string,
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.get(url, {
      headers: {
        "Content-Type": contentType,
      },
    });
    return { data: data as T, status: status };
  } catch (error) {
    throw error;
  }
};
const getBlobTemplate = async <T>(
  url: string,
  contentType = "application/json",
) => {
  try {
    const { data, status } = await api.get(url, {
      headers: {
        "Content-Type": contentType,
      },
      responseType:"blob"
    });
    return { data: data as T, status: status };
  } catch (error) {
    throw error;
  }
};

export {
  postTemplate,
  getTemplate,
  deleteTemplate,
  putTemplate,
  patchTemplate,
  postMultyPartTemplate,
  getBlobTemplate
};
