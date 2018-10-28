const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(function(longWord){
  return longWord.length > 7;
})

console.log(longFavoriteWords)


/*
filter method similar to map method, filter method
creates new array but excludes elements from origial array based on boolean from callback function

the callback fucntion should return either true or false 

*/
