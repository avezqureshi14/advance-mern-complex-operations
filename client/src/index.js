import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";
import { Provider } from "react-redux";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
