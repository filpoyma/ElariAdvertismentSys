import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import Reducer from "./redux/reducers";
import SubmitForm from "./conponents/SubmitForm";

const composeEnhancers = composeWithDevTools({});
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(Thunk)
    : composeEnhancers(applyMiddleware(Thunk));

const store = createStore(Reducer, devTools);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <SubmitForm />
    </BrowserRouter>
  </Provider>
);
