import Airplane from './airplane';

const displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach(function(element) {
   console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  }
)}

displayFuelCapacity()




// ES6 syntax, import keyword for importing objects

// import begins statement
// next is the name of variable to store default export in
// from kewyword  specifies where to load module from
// './menu' is name of module to load, refers to name of file without extension
