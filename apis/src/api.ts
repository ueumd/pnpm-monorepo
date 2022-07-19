import axios, {AxiosInstance} from 'axios'

const api:AxiosInstance = axios.create({

})

// Add a request interceptor
api.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use( (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.status!==200) {
        return  Promise.reject(response)
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default api