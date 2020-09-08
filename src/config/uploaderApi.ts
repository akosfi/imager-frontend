import axios from "axios";

const uploaderApi = axios.create({baseURL: 'http://todo.todo', timeout: 1000}) //TODO

export default uploaderApi;