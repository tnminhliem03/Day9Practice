import axios from "axios";
import { getGenericPassword } from "react-native-keychain";
import { refreshTokenService } from "./authService";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(async (config) => {
    const creds = await getGenericPassword();

    if (creds) {
        const { accessToken } = JSON.parse(creds.password);
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response?.status === 401 && !err.config._retry) {
            err.config._retry = true;
            const token = await refreshTokenService();
            err.config.headers.Authorization = `Bearer ${token}`;
            return api(err.config);
        }
        return Promise.reject(err);
    }
);

export default api;