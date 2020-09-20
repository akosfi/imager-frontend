import * as React from "react";
import {FC, memo, useState} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import TextInput from "../../common/inputs/text_input/TextInput";
import Button from "../../common/button/Button";
import UsersActions from "../../../redux/users/actions";

const css = require("./SignInPage.module.scss");

type StateProps = {}

type DispatchProps = {
    loginUser: typeof UsersActions.loginUser;
}

type Props = StateProps & DispatchProps;

const SignInPage: FC<Props> = ({loginUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => loginUser(email, password);

    return (
        <div className={css["SignInPage"]}>
            <div className={css["inner"]}>
                <div className={css["input-wrapper"]}>
                    <input
                        type="text"
                        value={email}
                        onChange={({target: {value}}) => setEmail(value)}
                        placeholder={"Email"}
                    />
                </div>
                <div className={css["input-wrapper"]}>
                    <input
                        type="password"
                        value={password}
                        onChange={({target: {value}}) => setPassword(value)}
                        placeholder={"Password"}
                    />
                </div>
                <div className={css["input-wrapper"]}>
                    <button onClick={handleLogin}><span className={css["title"]}>Sign In</span></button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    loginUser: UsersActions.loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignInPage));