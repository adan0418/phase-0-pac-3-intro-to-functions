// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  function sayHelloToGuadalupe() {console.log("Hello, Guadalupe!")}
  sayHelloToGuadalupe()
  function sayHelloLiz() {console.log("Hello, Liz!")}
  sayHelloLiz()
  function sayHelloSamip() {console.log("Hello, Samip!")}
  sayHelloSamip()
  sayHelloToGuadalupe
  sayHelloLiz
  sayHelloSamip

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("Write code");

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    return x + y;
  }
  add(1, 2)
  console.log(add(1,2))
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    x + y;
  }
  console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));

  function say(_acknowledgement, _lastName) {
    console.log("You rang!");
    return `${_acknowledgement}, ${_lastName}!`;
  }
  console.log(say("Say ah"))