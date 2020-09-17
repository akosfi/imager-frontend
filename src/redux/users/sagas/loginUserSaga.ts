import {put, call} from "redux-saga/effects"
import {User} from "../types";
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";
import {setJWTToken} from "../../../utils/auth/jwt";
import fetchLoggedInUserSaga from "./fetchLoggedInUserSaga";
import ImagesActions from "../../images/actions";
import UsersActions from "../actions";

function* loginUserSaga({payload: {email, password}}: ReturnType<typeof UsersActions.loginUser>) {
    try {
        const { token } = yield call(uploaderApi.post, '/login', {
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

export default loginUserSaga;