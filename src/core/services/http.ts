import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    const appStore = JSON.parse(localStorage.getItem("appStore") || "{}");
    if (appStore["token"]) {
        config.headers.Authorization = `Bearer ${appStore["token"]}`;
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
}, (error) => {
    // Do something with response error
    return Promise.reject(error);
});

export default axios;