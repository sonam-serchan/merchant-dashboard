import 'antd/lib/date-picker/style/css';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home/home';

const RedirectToHome = () => <Redirect to="/" />;


@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: any
}> {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={RedirectToHome} />
        </Switch>
      </BrowserRouter>
    )
  }
}