import {StoreState} from "../rootReducer";

const getState = (state: StoreState) => state.users;

export const getUser = (state: StoreState) => getState(state).user;

export const getIsUserLoggedIn = (state: StoreState) => getState(state).isUserLoggedIn;

export const getRegistrationErrors = (state: StoreState) => getState(state).registrationErrors;

export const getLoginErrors = (state: StoreState) => getState(state).loginErrors;