import React, { Component } from 'react';
import { get } from 'axios';
import PropTypes from 'prop-types';
import Gamecard from './Gamecard';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      shouldFetch: true
    };
  }

  componentWillMount() {
    this.setGameDataState();
    this.refreshGameData();
  }

  componentWillReceiveProps() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.setGameDataState();
    this.refreshGameData();
  }

  setGameDataState() {
    this.requestGameData()
    .then((resp) => {
      this.setState({ data: resp.data });
    });
  }

  requestGameData() {
    return new Promise((resolve, reject) => {
      const { date } = this.props;
      get(`http://192.168.1.5:8080/scoreboard?date=${date}`)
      .then(resp => resolve(resp))
      .catch((e) => {
        console.log(e);
        reject();
      });
    });
  }

  refreshGameData() {
    this.interval = setInterval(() => this.setGameDataState(), 30000);
  }

  shouldRenderScoreboard() {
    const { date } = this.props;
    if (!this.state.data) {
      return <span> Loading game data... </span>;
    } else if (this.state.data.length === 0) {
      return <span> No games today </span>;
    }
    const games = [];
    this.state.data.map((game) => {
      games.push(<Gamecard key={game.gameId} data={game} date={date} />);
    });
    return games;
  }

  render() {
    return <div>{this.shouldRenderScoreboard()}</div>;
  }
}

Scoreboard.propTypes = {
  date: PropTypes.string
};

Scoreboard.defaultProps = {
  date: '01/01/2017'
};

export default Scoreboard;
