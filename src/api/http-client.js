import axios from 'axios';
import queryString from 'query-string';
const URL = "http://localhost:8888";
const axiosClient = axios.create({
    baseURL : URL,
    headers : {
        'content-type' : 'application/json',
    }
})

axiosClient.interceptors.request.use( async (config) => {
    return config;
});

axiosClient.interceptors.response.use(response => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, error => {
    throw(error);
});

export default axiosClient;
