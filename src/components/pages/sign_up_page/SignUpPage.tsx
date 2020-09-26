import * as React from "react";
import {FC, memo, useState} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import UsersActions from "../../../redux/users/actions";
import TextInput from "../../common/inputs/text_input/TextInput";
import Button from "../../common/button/Button";
import {Link} from "react-router-dom";
import SnackBar, {SnackBarType} from "../../common/snackbar/SnackBar";
import {getRegistrationErrors} from "../../../redux/users/selectors";

const css = require("./SignUpPage.module.scss");

type StateProps = {
    errors: string[]
}

type DispatchProps = {
    registerUser: typeof UsersActions.registerUser;
}

type Props = StateProps & DispatchProps;

const SignUpPage: FC<Props> = ({registerUser, errors}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const handleRegistration = () => registerUser(email, password);

    const renderRegistrationErrors = () => errors.length > 0 ? (
        <section className={css["error-wrapper"]}>
            {errors.map(error => <SnackBar title={error} type={SnackBarType.ERROR} />)}
        </section>
    ) : <></>;

    return (
        <div className={css["SignUpPage"]}>
            <div className={css["inner"]}>
                {renderRegistrationErrors()}
                <div className={css["input-wrapper"]}>
                    <TextInput
                        type={"text"}
                        value={email}
                        setValue={(value) => setEmail(value)}
                        placeholder={"Email"}
                    />
                </div>
                <div className={css["input-wrapper"]}>
                    <TextInput
                        type={'password'}
                        value={password}
                        setValue={(value) => setPassword(value)}
                        placeholder={"Password"}
                    />
                </div>

                <div className={css["input-wrapper"]}>
                    <TextInput
                        type={'password'}
                        value={repeatedPassword}
                        setValue={(value) => setRepeatedPassword(value)}
                        placeholder={"Repeat Password"}
                    />
                </div>
                <div className={css["input-wrapper"]}>
                    <Button title={"Sign Up"} onClick={handleRegistration} />
                </div>
                <div className={css["input-wrapper"]}>
                    <Link to={"/sign-in"}>
                        <Button title={"Sign In"} inverseColors={true} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    errors: getRegistrationErrors(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    registerUser: UsersActions.registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignUpPage));