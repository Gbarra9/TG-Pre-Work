fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error ('Request failed!');
 }, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse
});
  

// first argument determines endpoint of the request

// .then() will fire after the promise status of fetch() has been resolved, it takes callback function response

// return.json() checks the ok response inside of a conditional
// test an ok property if response object since value will be boolean value, no errors from response.ok will be true and code returns response.json

// throw this error occurs when response.ok is falsy

// networkError will return if endpoint cannot be reached (server is down or ...)

// second .then() takes jsonResponse as parameter and return jsonResponse
// second .then() success callback wont run until previous .then() method has finished running
// second .then() will also not run if previous .then() throws an error
