const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high'
robot.recharge()

// privacy(in objects) mean certain objects should be mutable or able to have value changed

// JS has no pre-built privacy feature
// naming conventions were made to communicate to developers how to interact with object properties

// underscore is one naming convention which means that property value should not be changed directly
// the underscore property can be reassigned a value
