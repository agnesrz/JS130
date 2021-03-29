function newStack() {
  let stack = [];
  
  return {
    push(item) {
      stack.push(item);
    },
    
    pop() {
      stack.pop();
    },
    
    printStack() {
      stack.forEach(item => console.log(item));
    }
  };
}

let myStack = newStack();
myStack.push('Get dressed');
myStack.push('Brush teeth');
myStack.printStack(); // Get dressed / Brush teeth
myStack.pop();
myStack.printStack(); // Get dressed
