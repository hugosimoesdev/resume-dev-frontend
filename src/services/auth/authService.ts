import axios from 'axios';
import Cookies from 'js-cookie';

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
    Cookies.set('token', response.data, { expires: 1 });
    return response.data;
}