const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
 	return animal === 'elephant'
})

const startsWithS = animals.findIndex(function(sLetter){
  return sLetter.charAt(0) === 's'
})

// calling .findIndex() returns index of first element that evaluates true in callback function
// if there is no single element that evaluates true, .findIndex() returns -1
