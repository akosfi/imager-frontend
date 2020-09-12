import ImagesActions from "../actions";
import {Image} from "../../types";
import {call, put} from "redux-saga/effects";
import uploaderApi from "../../../config/uploaderApi";
import {AxiosResponse} from "axios";
import {get} from "lodash";


function* uploadImageSaga({payload: {image}}: ReturnType<typeof ImagesActions.uploadImage>) {
    try {

        type ReturnType = AxiosResponse<Image>;
        const uploadResult: ReturnType = yield call(uploaderApi.post, "/api/images/", {
            image
        });

        const uploadedImage: Image = get(uploadResult, "data.image", null);
        //TODO SNACKBAR ERROR
        if(!image) return;

        yield put(ImagesActions.addImage(uploadedImage));
    }
    catch(e) {

    }

}

export default uploadImageSaga;