import { VITE_API_BASE_URL } from "@/constants/environment-variables";
import axios from "axios";

export const api = axios.create({
  baseURL: VITE_API_BASE_URL,
});
