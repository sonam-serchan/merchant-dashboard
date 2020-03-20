import { create } from "mobx-persist";
import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app2";
import "./index.scss";
import * as serviceWorker from "./service.worker";
import AppStore from "./store2";

const appStore = new AppStore();
const hydrate = create({
  storage: localStorage,
  jsonify: true
});

hydrate("appStore", appStore)
  .then(() => {
    ReactDOM.render(
      <Provider appStore={appStore}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>,
      document.getElementById("root")
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
  })
  .catch((error: any) => {
    console.error(error);
  });
