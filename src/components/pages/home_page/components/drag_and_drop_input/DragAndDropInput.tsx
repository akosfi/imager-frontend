import * as React from "react";
import {ChangeEvent, FC, memo, useEffect} from "react";
import ImagesActions from "../../../../../redux/images/actions";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {UploadState} from "../../../../../redux/images/types";
import {StoreState} from "../../../../../redux/rootReducer";
import {getUploadState} from "../../../../../redux/images/selectors";
import LoadingSpinner from "../../../../common/loading_spinner/LoadingSpinner";

const css = require("./DragAndDropInput.module.scss");

type StateProps = {
    uploadState: UploadState
}

type DispatchProps = {
    uploadImages: typeof ImagesActions.uploadImage
}

type Props = StateProps & DispatchProps;

const DragAndDropInput: FC<Props> = ({uploadImages, uploadState}) => {
    const onFileUploadEvent = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("runs");
        const input = event.target;
        if(!input.files) return;
        const files: FileList = input.files;
        if(files.length === 0) {
            return;
        }
        const file: File = files[0];
        uploadImages(file);
    }


    const renderUploadInput = () => {
        if(uploadState === UploadState.INITIAL || uploadState === UploadState.UPLOADED) return (
            <>
                <span className={css["icon"]}>
                        +
                </span>
                <span className={css["text"]}>
                    Drag your image here, or Browse!
                </span>
                <input className={css["input"]} type="file" onChange={onFileUploadEvent}/>
            </>
        );
    }
    const renderLoadingSpinner = () => {
        if(uploadState === UploadState.UPLOADING) return (<LoadingSpinner />)
    }


    return (
        <div className={css["DragAndDropInput"]}>
            <div className={css["container"]}>
                <div className={css["inner"]}>
                    {renderLoadingSpinner()}
                    {renderUploadInput()}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    uploadState: getUploadState(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    uploadImages: ImagesActions.uploadImage
};


export default connect(mapStateToProps, mapDispatchToProps)(memo(DragAndDropInput));