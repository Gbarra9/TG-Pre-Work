const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

const checkConsistentOutput = (func, value) => {
  let firstTry = func(value)
  let secondTry = func(value)
  	 if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
}

checkConsistentOutput(addTwo, 5)

// higher-order functions are function taht take in functions as arguments
// Pass a function in as an argument to another function, don't invoke it, invoking would evaluate the return value
// callbacks , pass in the function itself by typing function without parantheses ()
