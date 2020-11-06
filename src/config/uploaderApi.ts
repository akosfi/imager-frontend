import axios from "axios";

const uploaderApi = axios.create({
    //Use this is hosted on different servers.
    //baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
    baseURL: `/api`,
    timeout: 1000,
    withCredentials: true
});

export default uploaderApi;