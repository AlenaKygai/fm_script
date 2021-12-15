'use strict';

const number = new Number (10); // создание объекта Number
console.dir(number);
console.dir(123123.456789.toFixed(2));

const num = Number(123123.456789.toFixed(2));
console.log(num);

let num2 = 12.123456; // объектом-оберткой через конструктор Number()
//num2 = num2.toFixed(2);
console.dir(num2);