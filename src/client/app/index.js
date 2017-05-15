import React, { Component } from 'react';
import { render } from 'react-dom';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    };
  }

  render() {
    return <Scoreboard date={this.state.date} />;
  }
}

render(<App />, document.getElementById('app'));
