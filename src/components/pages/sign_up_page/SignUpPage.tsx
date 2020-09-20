import * as React from "react";
import {FC, memo, useState} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import UsersActions from "../../../redux/users/actions";

const css = require("./SignUpPage.module.scss");

type StateProps = {}

type DispatchProps = {
    registerUser: typeof UsersActions.registerUser;
}

type Props = StateProps & DispatchProps;

const SignUpPage: FC<Props> = ({registerUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = () => registerUser(email, password);

    return (
        <div className={css["SignUpPage"]}>
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
                    <button onClick={handleRegistration}><span className={css["title"]}>Sign Up</span></button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    registerUser: UsersActions.registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignUpPage));