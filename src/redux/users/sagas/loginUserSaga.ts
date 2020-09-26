import {put, call} from "redux-saga/effects"
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import {setJWTToken} from "../../../utils/auth/jwt";
import fetchLoggedInUserSaga from "./fetchLoggedInUserSaga";
import UsersActions from "../actions";
import {get} from "lodash";

function* loginUserSaga({payload: {email, password}}: ReturnType<typeof UsersActions.loginUser>) {
    try {
        const {data: { token }} = yield call(uploaderApi.post, '/login', {
            email,
            password
        });

        setJWTToken(token);

        yield call(fetchLoggedInUserSaga);
        yield put(UsersActions.setLoginErrors([]));
    }
    catch(err){
        printSagaError(err);
        const error = get(err, "response.data.error", null);
        yield put(UsersActions.setLoginErrors(!!error ? [error] : []))
    }
}

export default loginUserSaga;