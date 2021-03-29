function myBind(func, ctx, firstArg) {
  return (...args) => {
   console.log(args);
   return func.apply(ctx, [firstArg, ...args]);
  };
}


function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15