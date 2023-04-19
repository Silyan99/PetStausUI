import axios from 'axios';
import config from '../config/config'
import { GetAuthToken, logout } from '../authsecurity';
import { toast } from 'react-toastify';

let serviceConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GetAuthToken()}`
    }
};

const baseAPI = axios.create({ baseURL: config.BaseAPI });

export const get = (url) => {
    const getPromise = baseAPI.get(url, serviceConfig);
    toast.promise(getPromise, {
        pending: "Loading...",
    }, config.ToastConfig);
    getPromise.catch(x=>{
        if(x.response.status===401)
            logout(); 
    })
    return getPromise;
};

export const put = (url,data)=>{
    const postPromise = baseAPI.put(url, data, serviceConfig);
    toast.promise(postPromise, {
        pending: "Saving...",
    });
    return postPromise;
}

export const post = (url, data) => {
    const postPromise = baseAPI.post(url, data, serviceConfig);
    toast.promise(postPromise, {
        pending: "Saving...",
    });
    return postPromise;
};

export const deleteApi = (url) => {
    let deletePromise = baseAPI.delete(url, serviceConfig);
    toast.promise(deletePromise, {
        pending: "Deleting...",
    });
    return deletePromise;
};
