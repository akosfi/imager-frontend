import {put} from "redux-saga/effects";
import UsersActions from "../actions";

function* logoutUserSaga () {
    localStorage.removeItem("jwt");
    yield put(UsersActions.clearResourceState());
}

export default logoutUserSaga;