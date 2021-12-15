'use strict';

const userName = 'Elon';

console.log(userName.toLocaleUpperCase());

console.log(userName[2]);

console.log(userName.charAt(3));

console.log(userName.charCodeAt(2));



const str = 'Сегодня хороший день у Илона Маска';
console.log(str.includes('я'));
console.log(str.includes('день'));
console.log(str.indexOf('день'));


const str1 = '      qwewq     ';
console.log(str1.trim());

const str2 = 'To be or not to be';
console.log(str2.split());
console.log(str2.split(''));
console.log(str2.split(' '));
console.log(str2.split('or'));