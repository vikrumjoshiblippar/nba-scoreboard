import React, { Component } from 'react';
import { get } from 'axios';
import Gamecard from './Gamecard';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    };
  }

  requestGameData() {
    const { date } = this.props;
    get('http://192.168.0.8:8080?date=05/14/2017')
    .then(resp => console.log(resp));
  }

  componentWillMount() {
    // this.data = {
    //   games: [
    //     {
    //       gmID: '1',
    //       home: 'MIL',
    //       away: 'BOS',
    //       hmScr: '69',
    //       awayScr: '64',
    //       period: '3',
    //       clock: '03:48',
    //       hmLeading: 'T. Snell',
    //       hmPts: '33',
    //       hmReb: '3',
    //       hmAst: '8',
    //       awayLeading: 'I. Thomas',
    //       awayPts: '32',
    //       awayReb: '1',
    //       awayAst: '3',
    //       boxLink: 'www.nba.com/scoreboard/'
    //     }
    //   ]
    // };

    this.requestGameData();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

// {this.data.games.map((game) => {
//   return <Gamecard key={game.gmID} data={game} />;
// })}

export default Scoreboard;
