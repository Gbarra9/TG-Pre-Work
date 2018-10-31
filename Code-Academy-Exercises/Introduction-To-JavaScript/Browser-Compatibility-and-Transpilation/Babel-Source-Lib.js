{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaSCript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "ME",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}



// Specify a script in package.json that initiates ES6+ to ES5 transpilation

// Package.json file has a property called "scripts", this holds an object for specifying command line shortcuts
// Add property called "build" into scripts with property value "babel src -d lib (this is a command line method transpiling ES6+ to ES5)

// BREAKING DOWN ARGUMENT "babel src -d lib"

// babel --> the Babel command call responsible for transpiling code
// src --> instructs Babel to transpile all JavaScript code inside src directory
// -d --> instructs Babel to write transpile code to directory
// lib --> Babel writes transpiled code to directory called lib
