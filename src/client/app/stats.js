import Nba from 'nba';

const fetchGames = (date) => {
  const games = [];
  Nba.stats.scoreboard({ gameDate: '05/07/2017' }).then(resp => console.log(resp));
  Nba.stats.scoreboard({ gameDate: date })
  .then((data) => {
    console.log(data);
    const { lineScore, gameHeader } = data;
    gameHeader.map((header) => {
      games.push(fetchGame(header, lineScore));
    });
    return games;
  });
};

const fetchGame = ({ header, lineScore }) => {
  const game = {
    gameSequence: header.gameSequence,
    gameId: header.gameId,
    home: teamInfo(header.homeTeamId, lineScore),
    away: teamInfo(header.visitorTeamId, lineScore)
  };
  return game;
};

const teamInfo = (teamId, lineScore) => {
  let team = null;
  for (let i = 0; i < lineScore.length; i += 1) {
    if (lineScore[i].teamId === teamId) {
      team = lineScore[i];
      lineScore.splice(i, 1);
      return team;
    }
  }
};

export default fetchGames;
