import React, {FC, memo, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import "./App.scss";
import axios from "axios";

import HomePage from "./components/pages/home_page/HomePage";
import Header from "./components/common/header/Header";
import SignInPage from "./components/pages/sign_in_page/SignInPage";
import UsersActions from "./redux/users/actions";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {setAuthorizationHeader, setJWTRefreshTimeout} from "./utils/auth/jwt";
import {StoreState} from "./redux/rootReducer";
import {User} from "./redux/users/types";
import {getIsUserLoggedIn, getUser} from "./redux/users/selectors";

type StateProps = {
    user: User | null;
    isUserLoggedIn: boolean;
}

type DispatchProps = {
    fetchLoggedInUser: typeof UsersActions.fetchLoggedInUser
}

type Props = StateProps & DispatchProps;

const App: FC<Props> = ({fetchLoggedInUser, user, isUserLoggedIn}) => {
    useEffect(() => {
        fetchLoggedInUser();
    }, [fetchLoggedInUser])

    useEffect(() => {
        setAuthorizationHeader();
        if(user && isUserLoggedIn) {
            setJWTRefreshTimeout();
        }
    }, [isUserLoggedIn, user]);


    return (
        <Router>
            <Header />
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/sign-in" exact>
                <SignInPage />
            </Route>
        </Router>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    user: getUser(state),
    isUserLoggedIn: getIsUserLoggedIn(state)
});


const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    fetchLoggedInUser: UsersActions.fetchLoggedInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));