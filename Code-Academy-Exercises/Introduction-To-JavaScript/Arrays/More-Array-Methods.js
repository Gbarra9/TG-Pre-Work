const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()

console.log(groceryList)

groceryList.unshift('popcorn')

console.log(groceryList)

console.log(groceryList.slice(1,4))

console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

// .slice method is non-mutable array method, takes existing array and creates another array based on chosen items
// .slice() takes 2 arguments, first argument is the start item index value and last is index value + 1 of last item (note:last item index value not inclusive)

// .indexOf() accepts the array item name as argument and returns its index value
