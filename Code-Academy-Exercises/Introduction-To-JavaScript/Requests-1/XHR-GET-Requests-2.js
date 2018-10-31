const xhr = new XMLHttpRequest();

const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
}
};

xhr.open('GET', url);
xhr.send();



/*

if (xhr.readyState === XMLHttpRequest.DONE) {

}

//conditional statement checks to see if request has finished

xhr.open() receives arguments : determine type and URL of request


*/


// How to write a boilerplate for an AJAX GET request using XMLHTMLRequest object
