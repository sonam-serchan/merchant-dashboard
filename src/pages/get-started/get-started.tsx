import { inject, observer } from "mobx-react";
import React from "react";
import AppStore from "../../store";
import "./get-started.scss";

@inject("appStore")
@observer
export default class GetStartedPage extends React.Component<{
  appStore: AppStore;
}> {
  componentDidMount() {

  }

  render() {
    return <div className="">Get Started</div>;
  }
}
