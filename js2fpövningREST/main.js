const stock = ["pen", "apple", "pencil", "notepad", "highlighter", "horse"];

const inStock = (item) => stock.indexOf(item) !== -1;
console.log(inStock("pencil"));

// indexOf = berättar vilket index stringen i metoden har
