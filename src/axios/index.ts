import axios from "axios";
import { getAccessToken, getUserId, getRefreshToken } from "../utils/tokens";

const apiClient = axios.create({
    baseURL: process.env.serverApi,
});

apiClient.interceptors.request.use(
    function (config) {
        const token = getAccessToken();
        const userId = getUserId();

        if (!token || !userId) {
            throw new Error("unauthorized");
        }

        config.headers.Authorization = `Bearer ${token}`;
        config.headers.userId = userId;

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = getRefreshToken();

                if (!refreshToken) {
                    throw new Error("Refresh token отсутствует.");
                }

                await apiClient.post(
                    "/api/PostRequestsUsers/GetNewRefreshAndJwtToken",
                    {
                        refreshToken,
                    }
                );
                originalRequest.headers["userId"] = getUserId();
                originalRequest.headers[
                    "Authorization"
                ] = `Bearer ${getAccessToken()}`;
                return apiClient(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
