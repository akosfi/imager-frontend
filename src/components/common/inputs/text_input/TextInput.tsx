import * as React from "react";
import {ChangeEvent, FC, memo} from "react";

const css = require("./TextInput.module.scss");

type OwnProps = {
    value: string;
    setValue: (value: string) => void;
    type?: "text" | "password";
    placeholder?: string;
}

type Props = OwnProps;

const TextInput: FC<Props> = ({value, setValue, type="text", placeholder=""}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <input type={type} value={value} onChange={onChange} className={css["TextInput"]} placeholder={placeholder}/>
    );
}

export default memo(TextInput);