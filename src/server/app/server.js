import express from 'express';
import apicache from 'apicache';
import fetchGames from './stats';

const app = express();
const cache = apicache.middleware;

app.use(cache('1 minute'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  return next();
});

app.get('/scoreboard', (req, res) => {
  const { date } = req.query;
  fetchGames(date).then(games => res.send(games));
});

app.listen(8080, () => console.log('running on port 8080'));
