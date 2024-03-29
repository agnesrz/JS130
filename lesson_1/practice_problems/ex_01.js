function filter(array, callback) {
  let result = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    if (callback(array[idx])) {
      result.push(array[idx]);
    }
  }
  
  return result;
}


let numbers = [1, 2, 3, 4, 5];

console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]