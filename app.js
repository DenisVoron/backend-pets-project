const express = require('express');
const cors = require('cors');

const logger = require('morgan');
require('dotenv').config();

const authRouter = require('./src/routes/api/auth');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());
// app.use(express.static('public'));

app.use('/api/auth', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
// universal error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
