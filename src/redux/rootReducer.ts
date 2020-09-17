import {combineReducers} from "redux";
import imagesReducer from "./images/reducer";
import {ImagesState} from "./images/types";
import {UsersState} from "./users/types";
import {usersReducer} from "./users/reducer";

export type StoreState = {
    images: ImagesState;
    users: UsersState;
}

export default combineReducers({images: imagesReducer, users: usersReducer});