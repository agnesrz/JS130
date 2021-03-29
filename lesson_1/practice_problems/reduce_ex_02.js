function filter(array, callback) {
  let filteredItems = [];
  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];
    if (callback(value)) {
      filteredItems.push(value);
    }
  }
  return filteredItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function filterAlt(array, callback) {
  return array.reduce((accum, currVal) => {
    if (callback(currVal)) {
      accum.push(currVal);
    }
    
    return accum;
  }, []);
}

console.log('---------------------------');
console.log(filterAlt(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filterAlt(numbers, number => number < 0)); // => []
console.log(filterAlt(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
console.log(filterAlt(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]