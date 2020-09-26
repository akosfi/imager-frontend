import * as React from "react";
import {FC, memo, useState} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import TextInput from "../../common/inputs/text_input/TextInput";
import Button from "../../common/button/Button";
import UsersActions from "../../../redux/users/actions";
import {Link} from "react-router-dom";
import SnackBar, {SnackBarType} from "../../common/snackbar/SnackBar";
import {getLoginErrors} from "../../../redux/users/selectors";

const css = require("./SignInPage.module.scss");

type StateProps = {
    errors: string[]
}

type DispatchProps = {
    loginUser: typeof UsersActions.loginUser;
}

type Props = StateProps & DispatchProps;

const SignInPage: FC<Props> = ({loginUser, errors}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => loginUser(email, password);

    const renderLoginErrors = () => errors.length > 0 ? (
        <section className={css["error-wrapper"]}>
            {errors.map(error => <SnackBar title={error} type={SnackBarType.ERROR} />)}
        </section>
    ) : <></>;

    return (
        <div className={css["SignInPage"]}>
            <div className={css["inner"]}>
                {renderLoginErrors()}
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
                    <Button title={"Sign In"} onClick={handleLogin} />
                </div>
                <div className={css["input-wrapper"]}>
                    <Link to={"/sign-up"}>
                        <Button title={"Sign Up"} inverseColors={true} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    errors: getLoginErrors(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    loginUser: UsersActions.loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SignInPage));