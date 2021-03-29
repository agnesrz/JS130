function forEach(array, callback, context) {
  for (let idx = 0; idx < array.length; idx += 1) {
    callback.call(context, array[idx], idx, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});