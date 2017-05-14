import React, { Component } from 'react';

class Gamecard extends Component {
  renderTeamScores() {
    const { data } = this.props;
    const teamScores = [];
    teamScores.push(teamScore(data.away, data.awayScr));
    teamScores.push(teamScore(data.home, data.hmScr));
    return teamScores;
  }

  render() {
    const { data } = this.props;
    return (
      <div style={styles.gameCard}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {this.renderTeamScores()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 2 }}>
          <span style={styles.timeFont}>{`${data.clock} Q${data.period}`}</span>
        </div>
      </div>
    );
  }
}

const teamScore = (team, score) => {
  return (
    <div key={team} style={styles.score}>
      <div style={styles.teamScore}>
        <img alt={'teamLogo'} src={`app/static/images/logos/${team}.png`} style={styles.logo} />      
        <span style={styles.teamFont}>{team}</span>
      </div>
      <span style={styles.scoreFont}>{score}</span>
    </div>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: '40px',
    width: '40px',
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
    fontSize: '18px',
    fontWeight: 'bold'
  },
  gameCard: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '10px'
  },
  timeFont: {
    fontFamily: 'Arial',
    fontSize: '32px',
    color: 'red'
  }
};

export default Gamecard;
