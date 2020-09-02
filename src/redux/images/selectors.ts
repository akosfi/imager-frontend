import {StoreState} from "../rootReducer";

const getState = (state: StoreState) => state.images;

export const getImageIds = (state: StoreState) => getState(state).imageIds;