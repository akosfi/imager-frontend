import {Image} from "../../types";
import {call, put} from "redux-saga/effects";
import uploaderApi from "../../../config/uploaderApi";
import ImagesActions from "../actions";

function* fetchImagesSaga() {
    const images: Image[] = yield call(uploaderApi.get, '/get');
    yield put(ImagesActions.loadImages(images));
}

export default fetchImagesSaga;