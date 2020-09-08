import * as React from "react";
import {FC, memo} from "react";
import DragAndDropInput from "./components/drag_and_drop_input/DragAndDropInput";

type Props = {

}

const Upload: FC<Props> = () => <><span>Drop or select your file here!</span><DragAndDropInput /></>

export default memo(Upload);