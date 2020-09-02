import { all } from "redux-saga/effects"
import imagesSaga from "./images/saga";

function* rootSaga() {
    return yield all([imagesSaga()])
}

export default rootSaga;