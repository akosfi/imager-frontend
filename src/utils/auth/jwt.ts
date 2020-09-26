import axios from "axios";
import uploaderApi from "../../config/uploaderApi";

export const setAuthorizationHeader = () => {
    const token = localStorage.getItem("jwt");
    const bearerHeader = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = bearerHeader;
    uploaderApi.defaults.headers.common['Authorization'] = bearerHeader;
}

export const setJWTToken = (token: string) => {
    localStorage.setItem("jwt", token);
    setAuthorizationHeader();
}

export const refreshJWTToken = async () => {
    try {
        const { data: { token } } = await uploaderApi.get("/refresh");
        setJWTToken(token);
    }
    catch (err) {
        console.log(err);
    }
}

export const setJWTRefreshTimeout = () => setInterval(async () => await refreshJWTToken(), 60000);
