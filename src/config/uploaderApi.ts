import axios from "axios";

const uploaderApi = axios.create({
    //should use real backend url
    //baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
    baseURL: '/api',
    timeout: 1000,
    withCredentials: true
});

export default uploaderApi;