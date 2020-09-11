import * as React from "react";
import {FC, memo} from "react";

const css = require("./DragAndDropInput.module.scss");

type Props = {

}

const DragAndDropInput: FC<Props> = () =>
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
        </div>
    </div>

export default memo(DragAndDropInput);