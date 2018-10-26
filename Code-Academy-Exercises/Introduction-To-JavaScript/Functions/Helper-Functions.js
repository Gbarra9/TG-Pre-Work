function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
    // calls monitorCount and receives value from monitorCount functions
    // receive return value from monitorCount and multiply by 200, to get result
  return monitorCount(rows, columns) * 200
}

// call costOfMonitors and pass arguments 5 and 4
const totalCost = costOfMonitors(5, 4) //result from costOfMonitors stored in totalCost variable
console.log(totalCost) //print to console 







// Helper function, functions being called inside another function
