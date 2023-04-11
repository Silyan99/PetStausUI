import axios from 'axios';
import config from '../config/config'

let serviceConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const baseAPI = axios.create({ baseURL: config.BaseAPI });

export const get = (url) => {
    return baseAPI.get(url, serviceConfig)
};

export const post = (url, data) => {
    return baseAPI.post(url, data, serviceConfig)
};

export const deleteApi = (url) => {
    return baseAPI.delete(url, serviceConfig)
};
