import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/schedules';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/schedules/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;
