import {takeEvery} from "redux-saga/effects";
import {ImagesConstants} from "./types";
import fetchImagesSaga from "./sagas/fetchImagesSaga";
import uploadImageSaga from "./sagas/uploadImageSaga";

function* imagesSaga() {
    yield takeEvery(ImagesConstants.FETCH_IMAGES, fetchImagesSaga);
    yield takeEvery(ImagesConstants.UPLOAD_IMAGE, uploadImageSaga);
}

export default imagesSaga;