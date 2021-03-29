function makeList() {
  return {
    items: [],
    
    add(newItem) {
      this.items.push(newItem);
      console.log(newItem + ' added!');
    },
    
    remove(item) {
      let idx = this.items.indexOf(item);
      this.items.splice(idx, 1);
      console.log(item + ' removed!');
    },
    
    list() {
      if (this.items.length > 0) {
        this.items.forEach(item => console.log(item));
      } else {
        console.log('The list is empty.');
      }
    }
  };
}


let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn