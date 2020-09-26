import {UsersConstants, UsersState} from "./types";

export const initialState: UsersState = {
    user: null,
    isUserLoggedIn: false,
    registrationErrors: [],
    loginErrors: []
}
export function usersReducer(
    state = initialState,
    action: any
): UsersState {
    switch (action.type) {
        case UsersConstants.LOAD_USER:
            return {
                ...state,
                user: action.payload.user
            }

        case UsersConstants.SET_IS_USER_LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: action.payload.loggedIn
            }

        case UsersConstants.SET_REGISTRATION_ERRORS:
            return {
                ...state,
                registrationErrors: action.payload.errors
            }

        case UsersConstants.SET_LOGIN_ERRORS:
            return {
                ...state,
                loginErrors: action.payload.errors
            }
        default:
            return state
    }
}

export default usersReducer;