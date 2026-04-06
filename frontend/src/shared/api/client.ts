import axios from "axios";
import { BACKEND_API } from "../config/env";

export const api = axios.create({
  baseURL:BACKEND_API
})

