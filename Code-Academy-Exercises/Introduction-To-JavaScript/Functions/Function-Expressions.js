const plantNeedsWater = function(day) {
  if(day === 'Wednesday') {
    return true
  } else {
    return false
  }
}

console.log(plantNeedsWater('Tuesday'))

// function without name is called anonymous functions
// function expression assigns an anonymous function to a declared variable
// declared variable becomes the indentifier
// To call function expression type variable name along with ()
