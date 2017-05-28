import React, { Component } from 'react';
import { render } from 'react-dom';
import { DateField } from 'react-date-picker';
import 'react-date-picker/index.css';
import dateFormat from 'dateformat';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      date: dateFormat(`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, 'mm/dd/yyyy')
    };
  }

  render() {
    const { containerStyle, dateFieldStyle } = styles;
    const onChange = dateString => this.setState({ date: dateFormat(dateString, 'mm/dd/yyyy') }, () => this.forceUpdate());
    return (
      <div style={containerStyle} >
        <DateField
          forceValidDate
          dateFormat={'MM/DD/YYYY'}
          onChange={onChange}
          defaultValue={this.state.date}
          style={dateFieldStyle}
        />
        <Scoreboard
          date={this.state.date}
        />
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column'
  },
  dateFieldStyle: {
    width: '25%',
    border: '1px black solid',
    borderRadius: '10px',
    padding: '2px'
  }
};

render(<App />, document.getElementById('app'));
