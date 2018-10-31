{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaSCript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ME",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}



// Use npm install, this installs new Node packages locally
// install creates new folder call node_modules and copies package files to it
// install copies dependencies for given packages


/*

$ npm install babel-cli -D
$ npm install babel-preset-env -D

babel-cli package include command line Babel tools
babel-preset-env has code that maps any JavaSCript features (ES6 to current) into ES5

-D flag instructs npm to add each package to a property called devDependecies in package.json
project's dependencies are listed in devDependencies, develoeprs can run project without installing each package seperately

npm run install, this instructs npm to look into package.json and download all packages listed in devDependencies



*/
