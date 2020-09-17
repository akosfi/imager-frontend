import { all } from "redux-saga/effects"
import imagesSaga from "./images/saga";
import usersSaga from "./users/saga";

function* rootSaga() {
    return yield all([imagesSaga(), usersSaga()])
}

export default rootSaga;