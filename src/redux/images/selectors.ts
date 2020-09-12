import {StoreState} from "../rootReducer";

const getState = (state: StoreState) => state.images;

export const getImages = (state: StoreState) => getState(state).images;