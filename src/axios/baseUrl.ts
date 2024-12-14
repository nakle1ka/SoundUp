import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
});

export default axiosBaseUrl;