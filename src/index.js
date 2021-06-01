import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import rootReducer from "./reducers";
import axios from 'axios';
window.axios = axios;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
