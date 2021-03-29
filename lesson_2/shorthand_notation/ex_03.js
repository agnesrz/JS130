function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

//Original
// let { baz, qux, bar } = foo(1, 2, 3);


// My Solution
// let baz = foo(1, 2, 3).baz;
// let qux = foo(1, 2, 3).qux;
// let bar = foo(1, 2, 3).bar;

// Actual Solution
let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;

console.log(baz);