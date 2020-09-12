import * as React from "react";
import {FC, memo} from "react";

const css = require("./Button.module.scss");

type OwnProps = {
    title: string;
}

type Props = OwnProps;

const Button: FC<Props> = ({title}) => {

    return (
        <div className={css["Button"]}>
            <span className={css["title"]}>{title}</span>
        </div>
    );
}

export default memo(Button);