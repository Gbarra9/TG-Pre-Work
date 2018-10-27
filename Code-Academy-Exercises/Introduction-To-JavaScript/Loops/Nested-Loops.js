// Write your code below

const bobsFollowers = ['Mary', 'Larry', 'Bob', 'Steve']

const tinasFollowers = ['Jim', 'Larry', 'Bob']

const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++ ) {
  for (let j = 0; j < tinasFollowers.length; j++ ) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(i)
    }
  }
}

// Nested loop, loop inside of another loop
// Use nested loop to compare elements in two arrays
