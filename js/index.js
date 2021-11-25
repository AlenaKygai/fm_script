
function toString() {
  return `${this.firstName} ${this.lastName} `;
}

// литеральный способ
// {} - это синтаксический сахар в данном контексте, все равно что обращаемся к встроенному конструктору и создаем объект
// const student1 = new Object({})
const student1 = {
  id:1,
  firstName: 'Elon',
  lastName: 'Musk',
  age:50,
  isMale: true,
// если свойство является методом, то можно просто назначить этот метод
// toString: toString,
  toString,
};

console.log(student1.toString());

const student2 = {
  id:2,
  firstName: 'Tim',
  lastName: 'Li',
  age:65,
  isMale: true,

  toString: toString,
};

