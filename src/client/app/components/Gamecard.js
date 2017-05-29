import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

class Gamecard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  getBoxScoreURL() {
    const { date, data } = this.props;
    const boxscoreDate = `http://www.nba.com/games/${dateFormat(date, 'yyyymmdd')}/${data.away.abbreviation}${data.home.abbreviation}#/boxscore`;
    return boxscoreDate;
  }

  renderTeamScores() {
    const { data } = this.props;
    const teamScores = [];
    teamScores.push(teamScore(data.away.abbreviation, data.away.score));
    teamScores.push(teamScore(data.home.abbreviation, data.home.score));
    return teamScores;
  }

  renderClock() {
    const { data } = this.props;
    let clockContent = '';
    if (data.status === 'Final') {
      clockContent = 'Final';
    } else if ((data.period === 0) || (data.period === 2 && data.status === 'Halftime')) {
      clockContent = data.status;
    } else {
      clockContent = `${data.timeRemaining} Q${data.period}`;
    }
    return <span style={styles.timeFont}>{clockContent}</span>;
  }

  render() {
    const { data } = this.props;
    const { gameCard } = styles;
    return (
      <div
        style={this.state.hover ? { ...gameCard, border: '3px blue solid', cursor: 'pointer' } : gameCard}
        onClick={() => window.location = this.getBoxScoreURL()}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {teamScore(data.away.abbreviation, data.away.score)}
        {this.renderClock()}
        {teamScore(data.home.abbreviation, data.home.score)}
      </div>
    );
  }
}

const teamScore = (team, score) => {
  return (
    <div key={team} style={styles.score} >
      <img alt={'teamLogo'} src={`app/static/images/logos/${team}.png`} style={styles.logo} />
      <span style={styles.scoreFont}>{score}</span>
    </div>
  );
};

Gamecard.propTypes = {
  data: PropTypes.object,
  date: PropTypes.string
};

Gamecard.defaultProps = {
  data: {},
  date: '01/01/2017'
};

const styles = {
  score: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px'
  },
  logo: {
    height: '80px',
    padding: '0px 10px 0px 10px'
  },
  teamScore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamFont: {
    fontFamily: 'Arial',
    fontSize: '18px'
  },
  scoreFont: {
    fontFamily: 'Arial',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  gameCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 30px 50px 30px',
    border: '1px solid black',
    borderRadius: '10px',
    marginBottom: '5px'
  },
  timeFont: {
    fontFamily: 'Arial',
    fontSize: '24px',
    color: 'red',
    textAlign: 'center',
    padding: '0px 5px 0px 5px'
  }
};

export default Gamecard;
