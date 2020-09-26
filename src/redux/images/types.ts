import {Image} from "../types";

export enum ImagesConstants {
    CLEAR_RESOURCE_STATE = "IMAGES/CLEAR_RESOURCE_STATE",
    LOAD_IMAGES = "IMAGES/LOAD_IMAGES",
    FETCH_IMAGES = "IMAGES/FETCH_IMAGES",
    UPLOAD_IMAGE = "IMAGES/UPLOAD_IMAGE",
    ADD_IMAGE = "IMAGES/ADD_IMAGE",
    SET_UPLOAD_STATE = "IMAGES/SET_UPLOAD_STATE",
    SET_UPLOAD_ERRORS = "IMAGES/SET_UPLOAD_ERRORS",
}

export enum UploadState {
    INITIAL,
    UPLOADING,
    UPLOADED
}

export type ImagesState = {
    images: Image[],
    uploadState: UploadState,
    uploadErrors: string[]
}