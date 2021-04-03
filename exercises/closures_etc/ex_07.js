"use strict";

function ItemCreator(itemName, category, quantity) {//'basket ball', 'sports', 0
  
  function moreThanOneWord(string) {
    return string.includes(' ');
  }
  
  function removeSpaces(string) {
    return [].filter.call(string, char => char !== ' ').join('');
  }
  
  function invalidItemName() {
    if (moreThanOneWord(itemName)) {
      return removeSpaces(itemName).length < 5;
    }
    
    return itemName.length < 5;
  }
  
  function invalidCategory() {
    return moreThanOneWord(category) || category.length < 5;
  }
  
  function invalidQuantity() {
    return quantity === undefined;
  }
  
  if (invalidItemName(itemName) || invalidCategory() || invalidQuantity()) {
    return {
      notValid: true
    };
  } else {
    return {
      skuCode: (removeSpaces(itemName).substring(0, 3) + category.substring(0, 2)).toUpperCase(),
      itemName,
      category,
      quantity
    };
  }
}

let ItemManager = {
  items: [],
  
  create(item, category, quantity) {
    let newItem = ItemCreator(item, category, quantity);
    
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
      return newItem;
    }
  },
  
  update(skuCode, obj) {
    let item = this.findItem(skuCode);//////////////
    
    for (let key in obj) {
      item[key] = obj[key];
    }
  },
  
  delete(skuCode) {
    let itemIdx = this.items.indexOf(this.findItem(skuCode));
    this.items.splice(itemIdx, 1);

  },
  
  inStock() {
    this.list.forEach(item => {
      if (item.quantity > 0) {
        console.log(item.itemName);
      }
    });
  },
  
  itemsInCategory(category) {
    this.items.forEach(item => {
      if (item.category === category) {
        console.log(item);
      }
    });
  },

  findItem(skuCode) {
   return this.items.filter(item => item.skuCode === skuCode)[0];
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },
  
  createReporter(skuCode) {
    return {
      itemInfo(obj) {
        obj.entries().forEach(pair => console.log(pair));
      }
    };
  },
  
  reportInStock() {
    let inStockItems = this.items.items.reduce((inStock, item) => {
      if (item.quantity > 0) {
        inStock.push(item.itemName);
      }
      
      return inStock;
    }, []).join(', ');
    
    console.log(inStockItems);
  }
};


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10