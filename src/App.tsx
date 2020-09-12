import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import "./App.scss";

import { Provider } from 'react-redux';

import store from "./redux";
import HomePage from "./components/pages/home_page/HomePage";
import Header from "./components/common/header/Header";
import SignInPage from "./components/pages/sign_in_page/SignInPage";

type Props = {};

const App: FC<Props> = () => {
  return (
      <Provider store={store}>
        <Router>
            <Header />
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/sign-in" exact>
                <SignInPage />
            </Route>
        </Router>
      </Provider>
  );
}

export default App;
