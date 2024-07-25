import axios, {AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "291e3694-f8e0-40da-adb0-12b7c313ec8e"
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },
    follow(userId: number) {
        return axiosInstance.post(`follow/${userId}`, {},)
    },
    unFollow(userId: number) {
        return axiosInstance.delete(`follow/${userId}`,)
    },
    getProfile(userId: number) {
        return axiosInstance.get(`profile/` + userId)
    },

}
export const authAPI = {
    getAuthStatus() {
        return axiosInstance.get(`auth/me`)
    },
    Login(loginParams: any){
        return axiosInstance.put('/auth/login',{loginParams})
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return axiosInstance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return axiosInstance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return axiosInstance.put('profile/status', {status})
    }
}