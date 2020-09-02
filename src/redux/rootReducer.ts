import {combineReducers} from "redux";
import imagesReducer from "./images/reducer";
import {ImagesState} from "./images/types";

export type StoreState = {
    images: ImagesState;
}

export default combineReducers({images: imagesReducer});