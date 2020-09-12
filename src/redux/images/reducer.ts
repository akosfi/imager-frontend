import {ImagesConstants, ImagesState} from "./types";

export const initialState: ImagesState = {
    images: [],
    selectedImages: []
}
export function imagesReducer(
    state = initialState,
    action: any
): ImagesState {
    switch (action.type) {
        case ImagesConstants.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload.images
            }
        default:
            return state
    }
}

export default imagesReducer;