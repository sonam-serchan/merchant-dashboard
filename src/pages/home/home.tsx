import 'antd/lib/date-picker/style/css';
import { inject, observer } from 'mobx-react';
import React from 'react';
import http from '../../core/services/http';
import './App.scss';

@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore?: any
}> {

  componentDidMount() {

    http.get('/user?ID=12345')
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
      <div>
        Home Screen
      </div>
    )
  }
}