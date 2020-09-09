import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";



import { Provider } from 'react-redux';

import store from "./redux";
import UploadPage from "./components/pages/upload_page/UploadPage";

type Props = {};

const App: FC<Props> = () => {
  return (
      <Provider store={store}>
        <Router>
            <Route path="/" exact>
                <UploadPage />
            </Route>
        </Router>
      </Provider>
  );
}

export default App;
