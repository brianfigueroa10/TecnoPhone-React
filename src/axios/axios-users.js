import axios from "axios"
import { BASE_URL } from "./constants"


export const createUser = async (username, email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
            username,
            email,
            password
        })
        return data;
    }
    catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data.errors;
        }
        throw error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        });
        return data;

    } catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data;
        }
        throw error;
    }
};
