const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}



// Create a GET request using async and await

// async function will return a promise

// await can only be used in an async function, await allows a program to run while waiting for a promise to resolve

// in try...catch statement, code in try block will be run and in the event of an exception/error, the code in catch statement will run

// Code in try block will send a request and handle response, the catch statement will take care of an error if it is thrown
