class DivideByZeroError extends Error {}

function div(first, second) {
  if (second === 0) {
    throw new DivideByZeroError("Divide by zero!");
  }

  return first / second;
}

let result = div(1, 0); // DivideByZeroError: Divide by zero!
console.log(result);    // not run