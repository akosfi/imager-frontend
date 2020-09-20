import * as React from "react";
import {FC, memo} from "react";
import DragAndDropInput from "./components/drag_and_drop_input/DragAndDropInput";
import ImageContainer from "./components/image_container/ImageContainer";

type Props = {};

const HomePage: FC<Props> = () => {

    return (
        <>
            <DragAndDropInput />
            <ImageContainer />
        </>
    );
}
export default memo(HomePage);