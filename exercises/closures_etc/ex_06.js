"use strict";

  function generateCharacter() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ0123456789';
    let randomIdx = Math.floor(Math.random() * chars.length);
    
    return chars[randomIdx];
  }
  
  function generateDisplayName() {
    let targetLength = 16;
    let username = '';
    
    for (let char = 1; char <= targetLength; char += 1) {
      username += generateCharacter();
    }
    
    return username;
  }


let Account = {
  reanonymize: function(password) {
    if (password !== this.password) {
      return 'Invalid Password';
    }
    
    let 
    
    return true;
  }
  
  init(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = this.reanonymize(this.password);
      
    return this;
  }
}

let myAccount = Object.create(Account).init();
console.log(myAccount.displayName);

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')); // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false