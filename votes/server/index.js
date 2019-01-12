const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const app = express();

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
  res.end();
});

app.get('/api/vote', function(req, res) {
  res.json(req.session);
});

app.listen(process.env.PORT, () =>
  console.log(`Voting server listening ${process.env.PORT}`),
);

module.exports = app;
