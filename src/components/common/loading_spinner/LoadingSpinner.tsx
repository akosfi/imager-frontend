import * as React from "react";
import {FC, memo} from "react";

const css = require("./LoadingSpinner.module.scss");


const LoadingSpinner: FC<{}> = () => {

    return (
        <div className={css["LoadingSpinner"]}/>
    );
}

export default memo(LoadingSpinner);