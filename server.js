import express from 'express';
import router from './src/routes/routes.js';

const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({ error: 'Could not decode request: ' + err });
  }
});

app.use('/', router);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
