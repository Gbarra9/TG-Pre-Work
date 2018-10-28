const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5
})
console.log(interestingWords)

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
	return word.length > 5
} ));

// .some() method tests if at least one element in an array passes the test implemented by the provided function
// Use mozilla doc to check the syntax,definition and examples of other iterator methods
