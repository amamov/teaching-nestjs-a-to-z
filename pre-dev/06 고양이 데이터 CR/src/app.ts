//** Create Read */

import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

//* READ 고양이 전체 목록을 모두 가져온다.
app.get('/cats', (req, res) => {
  try {
    const cats = Cat; // db에서 가져옴 -> error의 위험이 있다.
    // throw new Error('db connect error');
    res.send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터를 가져온다.
app.get('/cats/:id', (req, res) => {
  // const id = req.params;
  const { id } = req.params;
  console.log(id);
  try {
    const cat = Cat.find((cat) => {
      return id === cat.id;
    });
    console.log(cat);
    res.send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on...');
});
