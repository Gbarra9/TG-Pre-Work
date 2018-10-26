function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList()

/*
 default parameters allow function declaration to have predetermined values,
 if no value is passed into function or if argument is undefined

 argument from function call will always override a default parameter

*/
