function myBind(func, context) {
  
  return function() {
    func.call(context, ...arguments);
  };
} 


let obj = {greeting: 'hi'};

function greet(...args) {
  console.log(args);
  console.log(`${this.greeting} ${args[0]}`);
}

// greet('Aila'); // undefined Aila

let greetMe = myBind(greet, obj);

// greetMe(); // hi undefined
greetMe('Aila', 'Bee'); // hi Aila 