class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular')

const surgeonDurant = new Surgeon('Durant', 'Orthopedics')

// An instance is an object that contains the property names and methods of a class
// with unique property values

// new keyword generates new instance of a class
// new keyword calls constructor, executes code inside and returns new instance
