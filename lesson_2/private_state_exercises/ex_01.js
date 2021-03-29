"strict";

function makeCounterLogger(num1) {
  return function(num2) {
    if (num2 > num1) {
      for (let currNum = num1; currNum <= num2; currNum += 1) {
        console.log(currNum);
      }
    } else {
      for (let currNum = num1; currNum >= num2; currNum -= 1) {
        console.log(currNum);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2