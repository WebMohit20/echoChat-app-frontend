import apiClient from "../api";

export const login = async (data)=>{
    try {
       const response = await apiClient.post("/auth/login",data);
       return response.data; 
    } catch (error) {
        console.log(error.response);
    }
}

export const register = async (data) => {
    try {
        const response = await apiClient.post("/auth/register",data);
        return response.data;
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}