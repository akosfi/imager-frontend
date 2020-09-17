import {call} from "redux-saga/effects"
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import fetchLoggedInUserSaga from "./fetchLoggedInUserSaga";
import {setJWTToken} from "../../../utils/auth/jwt";
import UsersActions from "../actions";

function* registerUserSaga({payload: {email, password}}: ReturnType<typeof UsersActions.loginUser>) {
    try {
        const { token } = yield call(uploaderApi.post, '/register', {
            email,
            password
        });

        setJWTToken(token);

        yield call(fetchLoggedInUserSaga);
    }
    catch(err){
        printSagaError(err);
    }
}

export default registerUserSaga;