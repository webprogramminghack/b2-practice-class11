'use strict';

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ': ' + student)
    );
  },
};

group.showList();

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 3000);
sayHiDeferred('John');
