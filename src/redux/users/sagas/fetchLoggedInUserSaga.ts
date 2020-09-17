import {put, call} from "redux-saga/effects"
import {User} from "../types";
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import UsersActions from "../actions";

function* fetchLoggedInUserSaga() {
    try {
        const user: User = yield call(uploaderApi.get, '/me');
        yield put(UsersActions.loadUser(user));
    }
    catch(err){
        printSagaError(err);
        yield put(UsersActions.setIsUsedLoggedIn(false));
    }
}

export default fetchLoggedInUserSaga;