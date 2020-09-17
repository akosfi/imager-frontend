export type User = {
    email: string;
    id: string;
}

export enum UsersConstants {
    LOAD_USER = "USER/LOAD_USER",
    FETCH_LOGGED_IN_USER = "USER/FETCH_LOGGED_IN_USER",
    SET_IS_USER_LOGGED_IN = "USER/SET_IS_USER_LOGGED_IN",
    LOGIN_USER = "USER/LOGIN_USER",
    REGISTER_USER = "USER/REGISTER_USER",
}

export type UsersState = {
    user: User | null,
    isUserLoggedIn: false
}