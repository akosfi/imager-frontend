import {call, put} from "redux-saga/effects";
import {get} from "lodash";
import ImagesActions from "../actions";
import uploaderApi from "../../../config/uploaderApi";
import {UploadState} from "../types";
import {Image} from "../../types";


function* uploadImageSaga({payload: {image: _image}}: ReturnType<typeof ImagesActions.uploadImage>) {
    try {
        yield put(ImagesActions.setUploadErrors([]));
        yield put(ImagesActions.setUploadState(UploadState.UPLOADING));

        const imageFormWrapper = new FormData();
        imageFormWrapper.append("file", _image);

        const {data} = yield call(uploaderApi.post, "/images/", imageFormWrapper, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            timeout: 10000
        });

        const image: Image = get(data, "image", null);

        yield put(ImagesActions.addImage(image));
        yield put(ImagesActions.setUploadState(UploadState.UPLOADED));
    }
    catch(e) {
        console.log(e);
        const error = get(e, "response.data.error", "Upload failed!");
        yield put(ImagesActions.setUploadErrors([error]))
    } finally {
        yield put(ImagesActions.setUploadState(UploadState.UPLOADED));
    }

}

export default uploadImageSaga;