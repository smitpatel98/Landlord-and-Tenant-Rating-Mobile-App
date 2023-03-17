import { Response, Request } from 'express';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('I hear you');
});

export default app;
