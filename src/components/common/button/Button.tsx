import * as React from "react";
import {FC, memo} from "react";
import {noop} from "lodash";
import classNames from "classnames";

const css = require("./Button.module.scss");

type OwnProps = {
    title: string;
    onClick?: () => void;
    inverseColors?: boolean;
}

type Props = OwnProps;

const Button: FC<Props> = ({title, onClick, inverseColors=false}) => {
    const handleOnClick = !!onClick ? onClick : noop;
    return (
        <div
            className={classNames(css["Button"], {[css["inverse-colors"]]: inverseColors})}
            onClick={handleOnClick}>
            <span className={css["title"]}>{title}</span>
        </div>
    );
}

export default memo(Button);