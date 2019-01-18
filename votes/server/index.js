const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const redis = require('redis');
const app = express();

const REDIS_URL = process.env.NODE_ENV !== 'test' ? 'redis' : 'localhost';
let client;
const interval = setInterval(() => {
  try {
    client = redis.createClient(6379, REDIS_URL);
    clearInterval(interval);
  } catch (e) {
    console.error(`Redis Connection Error ${e}`);
  }
}, 1000);

app.use(bodyParser.json());

// No morgan logs on tests
process.env.NODE_ENV !== 'test' && app.use(morgan('dev'));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

app.post('/api/vote', function(req, res) {
  req.session.vote = req.body.vote;
  client.publish('vote', JSON.stringify(req.body));
  res.end();
});

app.get('/api/vote', function(req, res) {
  res.json(req.session);
});

app.listen(process.env.PORT, () =>
  console.log(`Voting server listening ${process.env.PORT}`),
);

module.exports = app;
