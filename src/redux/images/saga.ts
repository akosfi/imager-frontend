import {takeEvery} from "redux-saga/effects";
import {ImagesConstants} from "./types";
import fetchImagesSaga from "./sagas/fetchImagesSaga";

function* imagesSaga() {
    yield takeEvery(ImagesConstants.FETCH_IMAGES, fetchImagesSaga)
}

export default imagesSaga;