const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal.charAt(0))
console.log(secretMessage);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(function(smallNumber) {
  return smallNumber / 100;
})

console.log(smallNumbers)

// .map method is similar to .forEach method, .map returns a new arrays by taking a callback function and returning new array
