import * as express from 'express';
import { CatType, Cat } from './app.repository';

const app: express.Express = express();

app.use(express.json()); // body가 json 타입을 읽을 수 있도록 설정을 해주어야 한다.

app.get('/', (req: express.Request, res: express.Response) => {
  console.dir(req);
  console.log(req.header);
  res.send({ hello: 'world', data: Cat });
});

app.listen(8000, () => {
  console.log(`http://localhost:8000...`);
});
