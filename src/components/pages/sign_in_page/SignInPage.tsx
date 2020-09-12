import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import TextInput from "../../common/inputs/text_input/TextInput";
import Button from "../../common/button/Button";

const css = require("./SignInPage.module.scss");

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const SignInPage: FC<Props> = ({}) => {

    return (
        <div className={css["SignInPage"]}>
            <div className={css["inner"]}>
                <div className={css["input-wrapper"]}>
                    <TextInput value={"email"} setValue={() => "asd"}/>
                </div>
                <div className={css["input-wrapper"]}>
                    <TextInput value={"password"} setValue={() => "asd"}/>
                </div>
                <div className={css["input-wrapper"]}>
                    <Button title="Sign In" />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignInPage));