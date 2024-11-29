'use strict';

function sayHello() {
  console.log('Hello');
}

// setTimeout(sayHello, 1000);

function sayHi(phrase, who) {
  console.log(phrase + ', ' + who);
}

// setTimeout(sayHi, 1000, 'Hello', 'John');

// let timerId = setTimeout(() => console.log('never happens'), 1000);
// clearTimeout(timerId);

// let timerId = setInterval(() => console.log('tick'), 2000);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);

setTimeout(function () {
  clearTimeout(timerId);
}, 5000);
