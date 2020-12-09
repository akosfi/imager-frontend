import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import Button from "../button/Button";
import {Link} from "react-router-dom";
import {getIsUserLoggedIn, getUser} from "../../../redux/users/selectors";
import {User} from "../../../redux/types";
import UsersActions from "../../../redux/users/actions";

const css = require("./Header.module.scss");

type StateProps = {
    user: User | null;
    isUsedLoggedIn: boolean;
}

type DispatchProps = {
    logoutUser: typeof UsersActions.logoutUser
}

type Props = StateProps & DispatchProps;

const Header: FC<Props> = ({user, isUsedLoggedIn, logoutUser}) => {

    const isUserAuthenticated = isUsedLoggedIn && !!user;
    const title = "IMAGER-TESZT";

    return (
        <div className={css["Header"]}>
            <div className={css["logo"]}>
                <Link to={"/"}>
                    <span className={css["text"]}>{title}</span>
                </Link>
            </div>
            <div className={css["header-content"]}>
                {!isUserAuthenticated ?
                    <>
                        <div className={css["header-content-item"]}>
                            <Link to={"/sign-in"}>
                                <Button title={"Sign In"} />
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className={css["header-content-item"]}>
                            <span className={css["user-name"]}>{user?.email}</span>
                        </div>
                        <div className={css["header-content-item"]}>
                            <Button title={"Sign Out"} onClick={logoutUser} />
                        </div>
                    </>}
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    user: getUser(state),
    isUsedLoggedIn: getIsUserLoggedIn(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    logoutUser: UsersActions.logoutUser
};



export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));