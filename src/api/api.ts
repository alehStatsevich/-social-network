import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY":"bee89b17-b2e5-4e71-b1fe-edf5e0a03340"}
})

export const userAPI = {
    getUsers (currentPage: number, pageSize: number)  {
        return instance.get(`users?page=${currentPage} 
        &count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
    // follow(userId: number){
    //     return instance.post(`follow/${userId}`)
    // }
}


