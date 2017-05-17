import React, { Component } from 'react';
import { get } from 'axios';
import Gamecard from './Gamecard';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.requestGameData()
    .then((resp) => {
      this.setState({ data: resp.data });
    });
  }

  requestGameData() {
    return new Promise((resolve, reject) => {
      //const { date } = this.props;
      const date = '03/07/2017';
      get(`http://192.168.1.9:8080/scoreboard?date=${date}`)
      .then(resp => resolve(resp))
      .catch((e) => {
        console.log(e);
        reject();
      });
    });
  }

  shouldRenderScoreboard() {
    if (!this.state.data) {
      return <span> Loading game data... </span>;
    } else if (this.state.data.length === 0) {
      return <span> No games today </span>;
    }
    const games = [];
    this.state.data.map((game) => {
      games.push(<Gamecard key={game.gameId} data={game} />);
    });
    return games;
  }

  render() {
    return <div>{this.shouldRenderScoreboard()}</div>;
  }
}

export default Scoreboard;
