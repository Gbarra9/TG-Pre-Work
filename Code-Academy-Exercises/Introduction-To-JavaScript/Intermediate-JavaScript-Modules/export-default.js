const Airplane = {}

module.exports =  Airplane;

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,

  }
]

export default Airplane;


// ES6 offers more readable and flexible syntax for exporting modules
// default export and named exports

// export default replaces export.modules in ES6 syntax
