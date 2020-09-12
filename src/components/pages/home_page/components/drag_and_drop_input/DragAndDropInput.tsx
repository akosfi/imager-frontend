import * as React from "react";
import {ChangeEvent, FC, memo} from "react";
import {get} from "lodash";
import ImagesActions from "../../../../../redux/images/actions";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {StoreState} from "../../../../../redux/rootReducer";

const css = require("./DragAndDropInput.module.scss");

type DispatchProps = {
    uploadImages: typeof ImagesActions.uploadImage
}

type Props = DispatchProps;

const DragAndDropInput: FC<Props> = ({uploadImages}) => {

    const onFileUploadEvent = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        if(!input.files) return;
        const files: FileList = input.files;
        if(files.length === 0) {
            return;
        }
        const file: File = files[0];
        //uploadImages(file);
    }

    return (
        <div className={css["DragAndDropInput"]}>
            <div className={css["container"]}>
                <div className={css["inner"]}>
                    <span className={css["icon"]}>
                        +
                    </span>
                    <span className={css["text"]}>
                        Drag your image here, or Browse!
                    </span>
                </div>
                <input className={css["input"]} type="file" onChange={onFileUploadEvent}/>
            </div>
        </div>
    );
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    uploadImages: ImagesActions.uploadImage
};


export default connect(null, mapDispatchToProps)(memo(DragAndDropInput));