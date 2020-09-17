import {takeEvery} from "redux-saga/effects";
import {UsersConstants} from "./types";
import fetchLoggedInUserSaga from "./sagas/fetchLoggedInUserSaga";

function* usersSaga() {
    yield takeEvery(UsersConstants.FETCH_LOGGED_IN_USER, fetchLoggedInUserSaga);

}

export default usersSaga;