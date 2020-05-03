import { axiosInstance } from '../api/provider';

export const fetchLoginApi = async (login: string, pwd: string) => {
    return axiosInstance.post('Connection', {
        login,
        pwd,
        app: 'AGENDA',
    });
};
