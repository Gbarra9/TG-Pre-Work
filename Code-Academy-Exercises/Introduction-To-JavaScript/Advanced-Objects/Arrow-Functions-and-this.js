const robot = {
  energyLevel: 100,
  checkEnergy()  {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// Avoid using arrow functions in methods
// Arrow functions inherently bind an already defined this value to function itself (NOT calling object)
