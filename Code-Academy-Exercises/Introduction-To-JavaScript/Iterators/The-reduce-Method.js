const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)

console.log(newSum)

// the .reduce method returns a single value after iterating through the elements in the array and reducs the array
// .reduce() method is called by array, and .reduce() method takes in callback function
// callback function takes in two parameters: accumulator(the first element value) and currentValue (starts off as second element value)
// accumulator parameter after first iteration takes in the return value of the callback function for next iteration
// .reduce() can take a second parameter to set an initial value for accumulator
