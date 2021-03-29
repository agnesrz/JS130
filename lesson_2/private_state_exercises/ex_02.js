// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it prints all of the items on the list. If the list is empty, it prints an appropriate message.

function makeList() {
  let list = [];
  let printList = () => {
    list.length > 0 ? list.forEach(item => console.log(item)) 
      : console.log('The list is empty');
  };
  
  let addToList = (listItem) => {
    list.push(listItem);
    console.log(`${listItem} added!`);
  };

  let removeFromList = (itemToRemove) => {
    let removeIdx = list.findIndex(item => item === itemToRemove);
    list.splice(removeIdx, 1);
    console.log(`${itemToRemove} removed!`);
  };
  
  let listFunc = (listItem) => {
    if (listItem === undefined) {
      printList();
    } else if (!list.includes(listItem)) {
      addToList(listItem);
    } else {
      removeFromList(listItem);
    }
  };
  
  return listFunc;
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book