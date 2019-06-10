import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React from 'react';
import './App.css';
import logo from './logo.svg';


interface AppProps {
  categoryStore?: any
}

@inject('categoryStore')
@observer
export default class App extends React.Component<AppProps> {
  @observable private task: string = ''

  handleTaskChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value
  }

  handleAddTodo = () => {
    this.props.categoryStore.addTodo(this.task)
    this.task = ''
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