import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'baseURL',
    timeout: 5 * 1000,
    responseType: 'json',
});
