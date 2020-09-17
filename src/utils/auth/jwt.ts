import axios from "axios";
import uploaderApi from "../../config/uploaderApi";

export const setAuthorizationHeader = () => {
    const token = localStorage.getItem("jwt");
    const bearerHeader = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = bearerHeader;
    uploaderApi.defaults.headers.common['Authorization'] = bearerHeader;
}

export const refreshJWTToken = async () => {
    try {
        const { token } = await uploaderApi.get("/refresh");
        localStorage.setItem("jwt", token);
        setAuthorizationHeader();
    }
    catch (err) {
        console.log(err);
    }
}

export const setJWTRefreshTimeout = () => setInterval(async () => await refreshJWTToken(), 5000);
