import {put, call} from "redux-saga/effects"
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import UsersActions from "../actions";

function* fetchLoggedInUserSaga() {
    try {
        const { data: {user}} = yield call(uploaderApi.get, '/me');
        yield put(UsersActions.loadUser(user));
        yield put(UsersActions.setIsUsedLoggedIn(true));
    }
    catch(err){
        printSagaError(err);
        yield put(UsersActions.setIsUsedLoggedIn(false));
    }
}

export default fetchLoggedInUserSaga;