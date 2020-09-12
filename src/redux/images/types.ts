import {Image} from "../types";

export enum ImagesConstants {
    LOAD_IMAGES = "IMAGES/LOAD_IMAGES",
    FETCH_IMAGES = "IMAGES/FETCH_IMAGES"
}

export type ImagesState = {
    images: Image[]
}