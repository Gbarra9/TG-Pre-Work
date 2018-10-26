function monitorCount(rows, columns) {
  return rows * columns
}

const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)


// By default with no return in the function delcaration body resulting value is undefined
// return function captures the declared functions value into a variable when called
