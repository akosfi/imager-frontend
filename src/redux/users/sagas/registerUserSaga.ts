import {call, put} from "redux-saga/effects"
import {get} from "lodash"
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import fetchLoggedInUserSaga from "./fetchLoggedInUserSaga";
import {setJWTToken} from "../../../utils/auth/jwt";
import UsersActions from "../actions";

function* registerUserSaga({payload: {email, password}}: ReturnType<typeof UsersActions.loginUser>) {
    try {
        const {data: { token }} = yield call(uploaderApi.post, '/register', {
            email,
            password
        });

        setJWTToken(token);

        yield call(fetchLoggedInUserSaga);
        yield put(UsersActions.setRegistrationErrors([]));
    }
    catch(err){
        printSagaError(err);
        const error = get(err, "response.data.error", null);
        yield put(UsersActions.setRegistrationErrors(!!error ? [error] : []))
    }
}

export default registerUserSaga;