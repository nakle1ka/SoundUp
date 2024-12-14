import apiClient from "@/axios";
import { AxiosRequestConfig } from "axios";

export const getData = <T>(path: string, options?: AxiosRequestConfig) => {
    return async () => {
        try {
            const dataRes = await apiClient.get<T>(path, options);
            const data = dataRes.data;
            return data;
        } catch (e) {
            console.error("Error fetching data:", e);
            return null;
        }
    };
};
