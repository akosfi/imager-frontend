import ImagesActions from "../actions";
import {call, put} from "redux-saga/effects";
import uploaderApi from "../../../config/uploaderApi";
import {UploadState} from "../types";


function* uploadImageSaga({payload: {image}}: ReturnType<typeof ImagesActions.uploadImage>) {
    try {
        yield put(ImagesActions.setUploadState(UploadState.UPLOADING));
        const imageFormWrapper = new FormData();
        imageFormWrapper.append("file", image);

        const {data: {imageResult}} = yield call(uploaderApi.post, "/images/", imageFormWrapper, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        yield put(ImagesActions.addImage(imageResult));
        yield put(ImagesActions.setUploadState(UploadState.UPLOADED));
    }
    catch(e) {
        console.log(e);
    }

}

export default uploadImageSaga;