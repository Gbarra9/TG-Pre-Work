const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot

functionality.beep()


// destructured assignment - create a varaible with name of object's key(property name) wrapped
// around curly braces {} and assign to an object
