import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logger from './helper';
import routes from './routes';

const PORT = Number(process.env.PORT) || 7000;
const app = express();

app.use(cors());
app.use(json({}));
app.use(urlencoded({ extended: true }));
app.use(morgan('combined', { stream: logger.stream }));

app.use((err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}-${req.ip}`);

  res.status(500).send('Server error, this will be resolved shortly!');

  next();
});

app.get('/', (request, response) => {
  response.status(200).send('Welcome to Future Africa Backend');
});

app.use('/api/v1', routes);

app.use('*', (request, response) => {
  response.status(404).send('Not Found');
});

/*
app.use('/api/v1', (request, response) => {
  response.status(200).send('Welcome to Future Africa Backend v1');
})
*/

app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));

export default app;
