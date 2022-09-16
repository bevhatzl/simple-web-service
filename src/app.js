import express from 'express';
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err.statusCode === 400) {
    return res
      .status(400)
      .json({ error: 'Could not decode request: JSON parsing failed' });
  } else {
    throw new Error('Something went wrong!');
  }
});

export default app;
