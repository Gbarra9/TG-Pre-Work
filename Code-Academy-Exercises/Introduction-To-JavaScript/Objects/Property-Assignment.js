let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold'

spaceship.numEngines = 6

delete spaceship['Secret Mission']

// Objects are mutable(changeable), use either dot notation or bracket notation and assignment operator =
// if any property exists, value will change regardless
// no new property with name exists, it will be added to object
// objects declared with const can't have object reassigned, properties however can be mutatable
// use delete operator to delete properties in object
