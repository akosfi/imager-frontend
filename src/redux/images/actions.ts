import {ImagesConstants, UploadState} from "./types";
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

const setUploadState = (uploadState: UploadState) => ({type: ImagesConstants.SET_UPLOAD_STATE, payload: {uploadState}});


const ImagesActions = {
    loadImages,
    fetchImages,
    uploadImage,
    addImage,
    setUploadState
}

export default ImagesActions;
