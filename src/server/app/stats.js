import Nba from 'nba';

const fetchGames = (date) => {
  return new Promise((resolve, reject) => {
    const games = [];
    Nba.stats.scoreboard({ gameDate: date })
    .then((data) => {
      const { lineScore, gameHeader } = data;
      gameHeader.map((header) => {
        games.push(fetchGame({ header, lineScore }));
      });
      resolve(games);
    })
    .catch((e) => {
      console.log(e);
      reject();
    });
  });
};

const fetchGame = ({ header, lineScore }) => {
  const game = {
    gameSequence: header.gameSequence,
    gameId: header.gameId,
    status: header.gameStatusText,
    period: header.livePeriod,
    tipoff: header.gameDateEst,
    timeRemaining: header.livePcTime,
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
      return {
        abbreviation: team.teamAbbreviation,
        cityName: team.teamCityName,
        record: team.teamWinsLosses,
        score: team.pts
      };
    }
  }
};

export default fetchGames;
