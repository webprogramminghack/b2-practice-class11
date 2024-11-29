'use strict';

// function cacheFunction(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       console.log('Returning cached result');
//       return cache.get(key);
//     }

//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// const sum = (a, b) => a + b;
// const cachedSum = cacheFunction(sum);

// console.log(cachedSum(1, 2));
// console.log(cachedSum(1, 2));

const multiply = (a, b) => a * b;
// const cachedMultiply = cacheFunction(multiply);

// console.log(cachedMultiply(2, 3));
// console.log(cachedMultiply(2, 3));

const divider = (a, b) => a / b;
// const cachedDivider = cacheFunction(divider);

function sum2(a, b) {
  return a + b;
}

// function decorator(fn, text) {
//   return function (a, b) {
//     return text + fn(a, b);
//   };
// }

// const decoratedSum = decorator(sum2, 'Hasil adalah: ');
// console.log(decoratedSum(1, 2));

// console.log(sum2(1, 2));

function myFunction(awalan) {
  return function (a, b) {
    return awalan + (a + b);
  };
}

// const functionYangDireturn = myFunction('Nilainya adalah ');

// console.log(functionYangDireturn(1, 2));

// function decorator(fn) {
//   return function (a, b) {
//     return fn(a, b);
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// const functionYangDireturn = decorator(sum);
// console.log(functionYangDireturn(1, 2));

function decorator(functionYangAkanDilapisi) {
  return function (yangDiteruskan) {
    functionYangAkanDilapisi(yangDiteruskan);
  };
}

function sayHello(text) {
  console.log(text);
}

const decoratedSayHello = decorator(sayHello);
decoratedSayHello('hello everyone');

function tambah(a, b) {
  return a + b;
}

function myDecorator(fn, multiply) {
  return function (a, b) {
    return fn(a, b) * multiply;
  };
}

const decoratedTambah = myDecorator(tambah, 200);
console.log(decoratedTambah(1, 2));
