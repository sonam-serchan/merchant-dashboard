import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/home/home";
import AppStore from "./store";

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: AppStore;
  history: any;
}> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}
