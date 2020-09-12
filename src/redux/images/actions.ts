import {ImagesConstants} from "./types";
import {Image} from "../types";

const loadImages = (images: Image[]) => ({
    type: ImagesConstants.LOAD_IMAGES,
    payload: {
        images
    }
});

const fetchImages = () => ({type: ImagesConstants.FETCH_IMAGES});

const uploadImage = (image: File) => ({type: ImagesConstants.UPLOAD_IMAGE, payload: {image}});

const addImage = (image: Image) => ({type: ImagesConstants.ADD_IMAGE, payload: {image}});

const ImagesActions = {
    loadImages,
    fetchImages,
    uploadImage,
    addImage
}

export default ImagesActions;
