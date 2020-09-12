import {Image} from "../types";

export enum ImagesConstants {
    LOAD_IMAGES = "IMAGES/LOAD_IMAGES",
    FETCH_IMAGES = "IMAGES/FETCH_IMAGES",
    UPLOAD_IMAGE = "IMAGES/UPLOAD_IMAGE",
    ADD_IMAGE = "IMAGES/ADD_IMAGE",
}

export type ImagesState = {
    images: Image[]
}