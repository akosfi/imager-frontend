import {UsersConstants} from "./types";
import {User} from "../types";


const fetchLoggedInUser = () => ({type: UsersConstants.FETCH_LOGGED_IN_USER});

const loadUser = (user: User) => ({type: UsersConstants.LOAD_USER, payload: { user }});

const setIsUsedLoggedIn = (loggedIn: boolean) => ({type: UsersConstants.SET_IS_USER_LOGGED_IN, payload: { loggedIn }});

const loginUser = (email: string, password: string) => ({type: UsersConstants.LOGIN_USER, payload: { email, password }});

const registerUser = (email: string, password: string) => ({type: UsersConstants.REGISTER_USER, payload: { email, password }});

const setRegistrationErrors = (errors: string[]) => ({type: UsersConstants.SET_REGISTRATION_ERRORS, payload: { errors }});

const setLoginErrors = (errors: string[]) => ({type: UsersConstants.SET_LOGIN_ERRORS, payload: { errors }});



const UsersActions = {
    loadUser,
    setIsUsedLoggedIn,
    fetchLoggedInUser,
    loginUser,
    registerUser,
    setRegistrationErrors,
    setLoginErrors
}

export default UsersActions;
