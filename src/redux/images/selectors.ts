import {StoreState} from "../rootReducer";

const getState = (state: StoreState) => state.images;

export const getImages = (state: StoreState) => getState(state).images;

export const getUploadState = (state: StoreState) => getState(state).uploadState;

export const getUploadErrors = (state: StoreState) => getState(state).uploadErrors;