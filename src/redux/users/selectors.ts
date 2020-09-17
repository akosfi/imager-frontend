import {StoreState} from "../rootReducer";

const getState = (state: StoreState) => state.users;

export const getUser = (state: StoreState) => getState(state).user;

export const getIsUserLoggedIn = (state: StoreState) => getState(state).isUserLoggedIn;