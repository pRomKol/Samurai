import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})
export const getUsers = (currentPage: number, pageSize: number) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "291e3694-f8e0-40da-adb0-12b7c313ec8e"
        }})

        .then(response => response.data);
}