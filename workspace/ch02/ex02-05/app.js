// import { sum as add, substract, divide } from "./math.js";

import * as myMath from "./math.js";

var data = {
  a: 10,
  b: 20,
};

// console.log(1, add(data));

console.log(1, myMath.sum(data));
console.log(2, myMath.substract(data));
// console.log(3, myMath.divide(data));
