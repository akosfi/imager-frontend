import {ImagesConstants, ImagesState} from "./types";

export const initialState: ImagesState = {
    images: []
}
export function imagesReducer(
    state = initialState,
    action: any
): ImagesState {
    switch (action.type) {
        case ImagesConstants.LOAD_IMAGES:
            return {
                ...state,
                images: [state.images, action.payload.images]
            }
        case ImagesConstants.ADD_IMAGE:
            return {
                ...state,
                images: [action.payload.image, state.images]
            }
        default:
            return state
    }
}

export default imagesReducer;