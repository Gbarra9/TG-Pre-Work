const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if(typeof num === 'number' && num >=0) {
      this._numOfSensors = num
    } else {
      console.log(`Pass in a number that is greater than or equal to 0`)
    }
  }
};

robot.numOfSensors = 100
console.log(robot.numOfSensors)

// setter methods are used reassign values toexisting properties within an object
// Setter methods do not require set of parantheses () to be called

// Advantages are setting methods that include checking input, performing actions,
// displaying clear intention for how object is supposed to be used
