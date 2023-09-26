const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;
/*app.get('/', (req, res) => {
    request.status = 204;
    res.send('JOONHYUK');
    res.send('Hello World!')
});
*/
app.use('/path',router); // '/' 를 넣어주면, 이 path에 미들웨어를 넣어주겠다..
app.listen(port, () => console.log(`Server listening on port ${port}!`));

// 다른 path 로 가려고 하면 알아서 에러 처리 해줌.