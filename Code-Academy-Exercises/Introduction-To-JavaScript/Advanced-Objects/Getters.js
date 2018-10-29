const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return `My current energy level ${this._energyLevel}`
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);



// Getters are methods that get and return internal properties of an object
// get keyword is followed by function
// get methods don't require set of parantheses to be called

// Advantage of get method:
// getters can perform action on data when getting property
// getters can return different values using conditionals
// access the properties of the callign object using this
// fucntionality of code is easier to understand
