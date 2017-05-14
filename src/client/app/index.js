import React, { Component } from 'react';
import { render } from 'react-dom';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    return <Scoreboard date={'05/07/2017'} />;
  }
}

render(<App />, document.getElementById('app'));
