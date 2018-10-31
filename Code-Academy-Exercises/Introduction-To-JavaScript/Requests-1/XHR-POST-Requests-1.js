const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';

const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

xhr.open('POST',url);
xhr.send(data);


// Difference between GET request and POST request, POST request requires additional information to be sent through the request
// This additional information is sent to body of the post request

// JSON.stringify() converts a value to a JSON string
// converting value to a string allows data to be sent to server

// .onreadystatechange holds event handler that will be called when xhr's state changes

// .open() creates new request and arguments passed determine what type of request is being made and where its being made to
// .send() will send request to server
