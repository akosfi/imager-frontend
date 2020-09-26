import React, {FC, memo, useEffect} from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import "./App.scss";

import HomePage from "./components/pages/home_page/HomePage";
import Header from "./components/common/header/Header";
import SignInPage from "./components/pages/sign_in_page/SignInPage";
import UsersActions from "./redux/users/actions";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {setAuthorizationHeader, setJWTRefreshTimeout} from "./utils/auth/jwt";
import {StoreState} from "./redux/rootReducer";
import {getIsUserLoggedIn, getUser} from "./redux/users/selectors";
import PrivateRoute from "./components/common/private_route/PrivateRoute";
import SignUpPage from "./components/pages/sign_up_page/SignUpPage";
import {User} from "./redux/types";

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
        setAuthorizationHeader();
        fetchLoggedInUser();
    }, [fetchLoggedInUser])

    useEffect(() => {
        setAuthorizationHeader();
        if(user && isUserLoggedIn) {
            setJWTRefreshTimeout();
        }
    }, [isUserLoggedIn, user]);

    const isAuthenticated = !!user && isUserLoggedIn;

    return (
        <Router>
            <Header />
            <PrivateRoute
                path='/'
                redirectPath={'/sign-in'}
                exact
                guard={isAuthenticated}
            >
                <HomePage />
            </PrivateRoute>
            <PrivateRoute
                path='/sign-in'
                redirectPath={'/'}
                exact
                guard={!isAuthenticated}
            >
                <SignInPage />
            </PrivateRoute>
            <PrivateRoute
                path='/sign-up'
                redirectPath={'/'}
                exact
                guard={!isAuthenticated}
            >
                <SignUpPage />
            </PrivateRoute>
        </Router>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    user: getUser(state),
    isUserLoggedIn: getIsUserLoggedIn(state),
});


const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    fetchLoggedInUser: UsersActions.fetchLoggedInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));