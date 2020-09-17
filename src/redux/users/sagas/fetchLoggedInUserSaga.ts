import {put, call} from "redux-saga/effects"
import {User} from "../types";
import uploaderApi from "../../../config/uploaderApi";
import {printSagaError} from "../../../utils/errors/printError";

function* fetchLoggedInUserSaga() {
    try {
        const user: User = yield call(uploaderApi.get, '/me');
        //SET USER
        //SET LOGGED IN
        //UPDATE ACCESS/REFRESH TOKEN
    }
    catch(err){
        printSagaError(err);
        //SET LOGGED IN TO FALSE
    }
}

export default fetchLoggedInUserSaga;