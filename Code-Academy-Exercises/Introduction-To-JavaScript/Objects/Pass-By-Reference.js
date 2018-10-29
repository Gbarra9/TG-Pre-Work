let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = function (obj) {
 obj['Fuel Type'] = 'avocado oil'
}

const remotelyDisable = (obj) => {
  obj.disabled = true
}

greenEnergy(spaceship)
remotelyDisable(spaceship)

console.log(spaceship)


/*
objects are passed by reference, passing a varaible assigned to a function as an argument will
make the computer interpret the parameter name as pointing to space in memory holding object.

functions which change object properties will change object property permanently regardless if
object was declared using const variable



*/
