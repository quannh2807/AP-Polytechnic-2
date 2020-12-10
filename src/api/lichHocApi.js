import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/lich-hoc';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/lich-hoc/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;
