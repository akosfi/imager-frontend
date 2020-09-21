import * as React from "react";
import {FC, memo} from "react";
import getImageUrl from "../../../../../utils/getImageUrl";

const css = require("./ImageContainerItem.module.scss");


type OwnProps = {
    url: string;
}

type Props = OwnProps;

const ImageContainerItem: FC<Props> = ({url}) => {
    return (
        <div className={css["ImageContainerItem"]}>
            <div className={css["wrapper"]}>
                <img src={getImageUrl(url)} alt=""/>
            </div>
        </div>
    );
}

export default memo(ImageContainerItem);