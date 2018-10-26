const satellite = 'The Moon'
const galaxy = 'The Milky Way'
let stars = 'North Star'

const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(callMyNightSky())
console.log(stars)

// Scope pollution occurs when there are too many global variables in global namespace, this may cause errors such as accidently reassigning variables
