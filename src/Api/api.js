import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "1edf8804-d7e8-44ed-aedc-122a005c99a8"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => {
                return response.data;
            });
    },
    deleteUsers (id) {
        return instance.delete(`follow/${id}`).then(response =>{
            return response.data;
        });
    },
    postUsers (id) {
        return instance.post(`follow/${id}`).then(response =>{
            return response.data;
        });
    },
    authUser () {
        return instance.get(`auth/me`).then(response =>{
            return response.data;
        });
    },
    loginUser(email, password, rememberMe = false){
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logoutUser(){
        return instance.delete(`/auth/login`);
    }
};


export const profileAPI = {
    setUsers (userId) {
        return instance.get(`/profile/`+ `${userId}`).then(response =>{
            return response.data;
        });
    },
    getStatus (userId) {
        return instance.get(`/profile/status/`+ `${userId}`);
        },
    updateStatus (status){
        return instance.put(`/profile/status`, {status:status});
    }
    }