import axiosClient from './axiosClient';

const tinTucApi = {
    getAll: (params) => {
        const url = '/news';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/news/${id}`;
        return axiosClient.get(url);
    },
};

export default tinTucApi;
