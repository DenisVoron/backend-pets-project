const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const logger = require('morgan');
require('dotenv').config();

const swaggerDocument = require('./swagger.json');
const authRouter = require('./src/routes/api/auth');
const userRouter = require('./src/routes/api/user');
const servicesRouter = require('./src/routes/api/services');
const newsRouter = require('./src/routes/api/news');
const noticesRouter = require('./src/routes/api/notices');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRouter);
app.use("/api/users", userRouter);
app.use('/api/services', servicesRouter);
app.use('/api/news', newsRouter);
app.use('/api/notices', noticesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
// universal error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
