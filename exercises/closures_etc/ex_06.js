"use strict";

const readline = require('readline-sync');

let Account = (function() {
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
    
    function correctPassword(password) {
      return password === userPassword;
    }
    
    return {
      reanonymize(password) {
        if (!correctPassword) {
          return 'Invalid Password';
        }
        
        this.displayName = generateDisplayName();
        return true;
      },
      
      resetPassword(currentPassword, newPassword) {
        if (!correctPassword(currentPassword)) {
          return 'Invalid Password';
        }
        
        userPassword = newPassword;
        return true;
      },
      
      firstName(password) {
        return correctPassword(password) ? userFirstName : 'Invalid Password';       
      },
      
      lastName(password) {
        return correctPassword(password) ? userLastName : 'Invalid Password';      
      },
      
      email(password) {
        return correctPassword(password) ? userEmail : 'Invalid Password';
      },
      
      init(email, password, firstName, lastName) {
        (function() {
          let userEmail = email;
          let userPassword = password;
          let userFirstName = firstName;
          let userLastName = lastName;
        
          return {
            displayName: generateDisplayName()
          };
        })();
      }
    };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'

// let newBar = Object.create(Account.init('newbar@bar.com', 'hello1', 'new', 'bar'));
// console.log(newBar.firstName('hello1'));
// console.log(fooBar.firstName('hello1'));