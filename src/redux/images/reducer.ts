import {ImagesConstants, ImagesState} from "./types";

export const initialState: ImagesState = {
    imageIds: []
}
export function imagesReducer(
    state = initialState,
    action: any
): ImagesState {
    switch (action.type) {
        case ImagesConstants.LOAD_IMAGES:
            return {
                imageIds: [1,2]
            }
        default:
            return state
    }
}

export default imagesReducer;