import axios from "axios";

const uploaderApi = axios.create({baseURL: `${process.env.REACT_APP_SERVER_URL}/api`, timeout: 1000});

export default uploaderApi;