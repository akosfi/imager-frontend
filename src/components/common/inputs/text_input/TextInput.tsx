import * as React from "react";
import {ChangeEvent, FC, memo} from "react";

const css = require("./TextInput.module.scss");

type OwnProps = {
    value: string;
    setValue: (value: string) => void;
}

type Props = OwnProps;

const TextInput: FC<Props> = ({value, setValue}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <input type="text" value={value} onChange={onChange} className={css["TextInput"]}/>
    );
}

export default memo(TextInput);