const express = require("express");
const app = express();
const port = 3000;

app.get("/board/page/:page", (req, res) => {
  // 요청 객체의 params 속성에서 페이지 번호를 가져온다.
  const page = req.params.page;

  // 페이지 번호를 표시하는 문자열을 생성한다.
  const response = `This is : ${page}`;

  // 응답으로 문자열을 반환한다.
  res.send(response);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });