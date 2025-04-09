import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://chat-backend-7-4ydt.onrender.com/" : "/api",  // Make sure this matches your backend
    withCredentials: true, // Ensures cookies (JWT) are sent
});

export default axiosInstance;
