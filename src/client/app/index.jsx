import React, { Component } from 'react';
import { render } from 'react-dom';
import Scoreboard from './components/Scoreboard.jsx';

class App extends Component {
	render(){
		return <Scoreboard />;
	}
}

render(<App />, document.getElementById("app"));