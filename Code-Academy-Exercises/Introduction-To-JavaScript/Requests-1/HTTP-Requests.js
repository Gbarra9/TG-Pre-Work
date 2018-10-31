console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');



// JavaScript is an asynchronous language
// JavaScript uses an event loop to handle asynchronous function calls

// When program is run, function calls are made and added to stack
// Functions that make requests that need to wait for servers to respond are then sent to a separate queue
// once stack has cleared, functions is queue are executed
// Web developers control smooth browsing experience by deciding when to call functions and how to handle asynchronous events

// Asynchronous JavaScript and XML (AJAX)
