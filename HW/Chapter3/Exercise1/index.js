const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // GET 요청의 경우 query 데이터를 사용한다.
  const query = req.query;
  const response = Object.keys(query).map((k) => `${k}: ${query[k]}`).join("\n");
  res.send(response);
});

app.post("/", (req, res) => {
  // POST, PUT, DELETE 요청의 경우 body 데이터를 사용한다.
  const body = req.body;
  const response = Object.keys(body).map((k) => `${k}: ${body[k]}`).join("\n");
  res.send(response);
});

app.put("/", (req, res) => {
    // POST, PUT, DELETE 요청의 경우 body 데이터를 사용한다.
    const body = req.body;
    const response = Object.keys(body).map((k) => `${k}: ${body[k]}`).join("\n");
    res.send(response);
});

app.delete("/", (req, res) => {
    // PUT 요청의 경우 body 데이터를 사용한다.
    const body = req.body;
    const response = Object.keys(body).map((k) => `${k}: ${body[k]}`).join("\n");
    res.send(response);
  });


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });