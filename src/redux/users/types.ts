import {User} from "../types";

export enum UsersConstants {
    LOAD_USER = "USER/LOAD_USER",
    FETCH_LOGGED_IN_USER = "USER/FETCH_LOGGED_IN_USER",
    SET_IS_USER_LOGGED_IN = "USER/SET_IS_USER_LOGGED_IN",
    LOGIN_USER = "USER/LOGIN_USER",
    LOGOUT_USER = "USER/LOGOUT_USER",
    REGISTER_USER = "USER/REGISTER_USER",
    SET_LOGIN_ERRORS = "USER/SET_LOGIN_ERRORS",
    SET_REGISTRATION_ERRORS = "USER/SET_REGISTRATION_ERRORS",
    CLEAR_RESOURCE_STATE = "USER/CLEAR_RESOURCE_STATE",
}

export type UsersState = {
    user: User | null,
    isUserLoggedIn: false,
    registrationErrors: string[];
    loginErrors: string[];
}