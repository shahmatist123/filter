import express from 'express';
import ViteExpress from 'vite-express';
import bodyparser from 'body-parser';

const app = express();
app.use(bodyparser.json({ limit: '50mb' }));

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
);
