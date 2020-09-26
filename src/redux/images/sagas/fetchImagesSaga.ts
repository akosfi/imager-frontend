import {get, orderBy} from "lodash";
import {call, put} from "redux-saga/effects";
import ImagesActions from "../actions";
import uploaderApi from "../../../config/uploaderApi";
import {Image} from "../../types";

function* fetchImagesSaga() {
    const {data} = yield call(uploaderApi.get, '/images/');

    const images: Image[] = orderBy(get(data, "images", []), ({createdAt}) => new Date(createdAt), "desc");

    yield put(ImagesActions.loadImages(images));
}

export default fetchImagesSaga;