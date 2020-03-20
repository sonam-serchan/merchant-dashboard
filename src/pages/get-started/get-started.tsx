import { inject, observer } from "mobx-react";
import React from "react";
import AppStore from "../../store";
import "./home.scss";

@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  componentDidMount() {

  }

  render() {
    return <div>Home Screen</div>;
  }
}
