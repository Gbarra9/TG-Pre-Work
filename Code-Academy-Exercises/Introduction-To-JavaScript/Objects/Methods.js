let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
  	console.log('Spim... Borp... Glix... Blastoff!')
	}
}

alienShip.retreat()
alienShip.takeOff()

// A Method is data stored on an object is a function
// property is what object has , method is what object does
// object property should have value of anonymous function expression followed with comma
// ES6 version has no function keyword --> objectName () {}
// Invoke object methods using object name followed by dot operator and closed paranthses
