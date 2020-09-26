import {takeEvery, takeLeading} from "redux-saga/effects";
import {UsersConstants} from "./types";
import fetchLoggedInUserSaga from "./sagas/fetchLoggedInUserSaga";
import loginUserSaga from "./sagas/loginUserSaga";
import registerUserSaga from "./sagas/registerUserSaga";
import logoutUserSaga from "./sagas/logoutUserSaga";

function* usersSaga() {
    yield takeLeading(UsersConstants.LOGIN_USER, loginUserSaga);
    yield takeLeading(UsersConstants.LOGOUT_USER, logoutUserSaga);
    yield takeLeading(UsersConstants.REGISTER_USER, registerUserSaga);
    yield takeEvery(UsersConstants.FETCH_LOGGED_IN_USER, fetchLoggedInUserSaga);

}

export default usersSaga;