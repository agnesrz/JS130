// Why does the following code return an error? Why doesn't it log 'undefined Item: ' ?
// Why does 'this' evaluate to undefined?

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
[4, 5, 6].forEach(foo.showItem); //T ypeError: Cannot read property 'prefix' of undefined