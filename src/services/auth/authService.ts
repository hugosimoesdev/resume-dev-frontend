import axios from 'axios';

export interface User {
    email: string;
    password: string;
}

const API_URL = 'http://localhost:8080/auth';

export const signUp = async (user: User) => {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response.data;
}

export const signIn = async (user: User) => {
    const response = await axios.post(`${API_URL}/signin`, user);
    return response.data;
}