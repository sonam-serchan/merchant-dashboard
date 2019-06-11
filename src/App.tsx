import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import { inject, observer } from 'mobx-react';
import React from 'react';
import './App.css';
import http from './core/services/http';
import logo from './logo.svg';


@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: any
}> {
  
  componentDidMount() {

    http.get('/user?ID=12345')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <DatePicker />
          {this.props.appStore.token}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  }
}