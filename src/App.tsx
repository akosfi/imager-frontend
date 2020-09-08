import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";



import { Provider } from 'react-redux';

import store from "./redux";
import Upload from "./components/upload/Upload";

type Props = {};

const App: FC<Props> = () => {
  return (
      <Provider store={store}>
        <Router>
            <Route path="/" exact>
                <Upload />
            </Route>
        </Router>
      </Provider>
  );
}

export default App;
