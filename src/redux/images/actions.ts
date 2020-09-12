import {ImagesConstants} from "./types";
import {Image} from "../types";

const loadImages = (images: Image[]) => ({
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
