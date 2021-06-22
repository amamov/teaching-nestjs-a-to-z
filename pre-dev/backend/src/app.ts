import * as express from 'express';

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
  console.dir(req);
  console.log(req.header);
  res.send({ hello: 'world' });
});

app.listen(8000, () => {
  console.log(`http://localhost:8000...`);
});
