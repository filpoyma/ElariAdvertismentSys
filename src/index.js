import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import Reducer from "./redux/reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = composeWithDevTools({});
const store = createStore(Reducer, composeEnhancers(applyMiddleware(Thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
