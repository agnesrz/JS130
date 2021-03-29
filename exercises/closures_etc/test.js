function generateCharacter() {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ0123456789';
  let randomIdx = Math.floor(Math.random() * chars.length);
  
  return chars[randomIdx];
}
  
function generateDisplayName() {
  let charLength = 16;
  let username = '';
    
  for (let char = 1; char <= charLength; char += 1) {
    username += generateCharacter();
  }
    
  return username;
}

let display = generateDisplayName();
console.log(display);