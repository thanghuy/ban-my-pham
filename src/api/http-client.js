import axios from 'axios';
const URL = "https://sit.api.hicas.vn";
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