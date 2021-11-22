const user = {
  firstName: 'Elon',
  lastName: 'Musk',
  age: 50,
  isMale: true,
}
const sayHello = function(obj){
  return  `Hello, ${obj.firstName} ${obj.lastName}!`
}
console.log(sayHello(user)); // result - Hello, Elon Musk

const user1 = {
  firstName: 'Tim',
  lastName: 'Lii',
  age: 15,
  isMale: true,
}
console.log(sayHello(user1));