const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
     }
	}
}

const tinCan = robotFactory('P-500', true)

tinCan.beep()

// factory functions create many instances of an object quickly

// factory function by definition is a function that returns an object
// and can be reused to make multiple object instances

// factory functions can also have parameters
