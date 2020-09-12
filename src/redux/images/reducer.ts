import {ImagesConstants, ImagesState, UploadState} from "./types";

export const initialState: ImagesState = {
    images: [],
    uploadState: UploadState.UPLOADING
}
export function imagesReducer(
    state = initialState,
    action: any
): ImagesState {
    switch (action.type) {
        case ImagesConstants.LOAD_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.payload.images]
            }

        case ImagesConstants.ADD_IMAGE:
            return {
                ...state,
                images: [action.payload.image, ...state.images]
            }

        case ImagesConstants.SET_UPLOAD_STATE:
            return {
                ...state,
                uploadState: action.payload.uploadState
            }
        default:
            return state
    }
}

export default imagesReducer;