import React from "react";
import ReactDOM from "react-dom";
import "./styles/base.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "mobx-react";
import registrationStore from "./stores/registrationStore";
import userStore from "./stores/userStore"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ToastProvider>
    <Provider registrationStore={registrationStore} userStore={userStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ToastProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
