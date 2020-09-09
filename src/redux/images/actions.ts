import {ImagesConstants} from "./types";

const loadImages = (images: any) => ({
    type: ImagesConstants.LOAD_IMAGES,
    payload: {
        images
    }
});

const fetchImages = () => ({type: ImagesConstants.FETCH_IMAGES});

const ImagesActions = {
    loadImages,
    fetchImages
}

export default ImagesActions;
