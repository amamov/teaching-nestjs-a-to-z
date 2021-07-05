import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get("/testsdassd", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "yoon sang seok", age: 99, friends: ["ss", "ys", "ye"] });
  res.send("sadjklas");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});
