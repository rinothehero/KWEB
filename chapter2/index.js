//const circularShapes = require("./circular-shapes");
const { getCircumference } = require("./circular-shapes");
// 모듈을 require -> export 한 함수를 사용 가능
const path = require('path');
const r = 10;
const h = 20;

console.log(`Circumference = ${circularShapes.getCircumference(r)}`);

const myFile = "/joon/jome/kweb/example/js";
// 예시 디렉토리
const dirname = path.dirname(myFile);
console.log(dirname);
const basename = path.basename(myFile);
console.log(basename);
