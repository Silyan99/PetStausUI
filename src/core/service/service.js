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
        pending: "Processing...",
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
        pending: "Processing...",
    });
    return postPromise;
}

export const postformdata =(url,data)=>{
    let form = new FormData();
    let keysArray = Object.keys(data);
    for (let index = 0; index < keysArray.length; index++) {
       form.append(`details.${keysArray[index]}`, data[keysArray[index]]);
    }
    serviceConfig.headers["Content-Type"] = "multipart/form-data";
    const postPromise = baseAPI.post(url, form, serviceConfig);
    toast.promise(postPromise, {
        pending: "Processing...",
    });
    return postPromise;
}

export const postformdataupdate =(url,data)=>{
    let form = new FormData();
    let keysArray = Object.keys(data);
    for (let index = 0; index < keysArray.length; index++) {
       form.append(`details.${keysArray[index]}`, data[keysArray[index]]);
    }
    serviceConfig.headers["Content-Type"] = "multipart/form-data";
    const postPromise = baseAPI.post(url, form, serviceConfig);
    toast.promise(postPromise, {
        pending: "Processing...",
    });
    return postPromise;
}

export const post = (url, data) => {
    const postPromise = baseAPI.post(url, data, serviceConfig);
    toast.promise(postPromise, {
        pending: "Processing...",
    });
    return postPromise;
};

export const deleteApi = (url) => {
    let deletePromise = baseAPI.delete(url, serviceConfig);
    toast.promise(deletePromise, {
        pending: "Processing...",
    });
    return deletePromise;
};
