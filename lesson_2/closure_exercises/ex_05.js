function makeMultipleLister(num) {
  
  return function() {
    for (let curVal = num; curVal < 100; curVal += num) {
      console.log(curVal);
    }
  };
}

let lister = makeMultipleLister(17);
lister();
// 17
// 34
// 51
// 68
// 85