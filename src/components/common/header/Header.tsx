import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import Button from "../button/Button";
import {Link} from "react-router-dom";
import {getIsUserLoggedIn, getUser} from "../../../redux/users/selectors";
import {User} from "../../../redux/users/types";

const css = require("./Header.module.scss");

type StateProps = {
    user: User | null;
    isUsedLoggedIn: boolean;
}

type Props = StateProps;

const Header: FC<Props> = ({user, isUsedLoggedIn }) => {

    const isUserAuthenticated = isUsedLoggedIn && !!user;

    return (
        <div className={css["Header"]}>
            <div className={css["logo"]}>
                <Link to={"/"}>
                    <span className={css["text"]}>IMAGERRR</span>
                </Link>
            </div>
            <div className={css["button-container"]}>
                {!isUserAuthenticated ?
                    <>
                        <Link to={"/sign-in"}>
                            <Button title={"Sign In"} />
                        </Link>
                        <Link to={"/sign-up"}>
                            <Button title={"Sign Up"} />
                        </Link>
                    </>
                    :
                    <><span className={css["user-name"]}>{user?.email}</span></>}
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    user: getUser(state),
    isUsedLoggedIn: getIsUserLoggedIn(state)
});


export default connect(mapStateToProps)(memo(Header));