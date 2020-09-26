import {put} from "redux-saga/effects";
import UsersActions from "../actions";
import ImagesActions from "../../images/actions";

function* logoutUserSaga () {
    localStorage.removeItem("jwt");
    yield put(UsersActions.clearResourceState());
    yield put(ImagesActions.clearResourceState());
}

export default logoutUserSaga;