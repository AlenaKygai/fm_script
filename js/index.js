
function toString() {
  return `${this.firstName} ${this.lastName} `;
}

const animal = {
  go: function () {
    return `${this.firstName} go`;
  }
}

const man = {
  eat: function () {
    return `${this.firstName} eating`;
  }
}

man.__proto__ = animal;
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
student1.__proto__ = man; // для наследования от литирального объекта к литеральному объекту другому 
console.log(student1.eat());
console.log(student1.go());

const student2 = {
  id:2,
  firstName: 'Tim',
  lastName: 'Li',
  age:65,
  isMale: true,

  toString: toString,
};
console.log(student2.toString());




const rabbit = {
  color: 'grey',
  jump: function () {
    return `${this.name} jump`;
  },
};

const rabbitDom = {
  name:'Banny', 
  pet: function () {
    return `Pet ${this.name}`;
  }
};

const rabbitMagic = {
  say: function (word) {
    return  `${this.name} say ${word}`;
  }
};
rabbitMagic.__proto__ = rabbitDom;
rabbitDom.__proto__ = rabbit;

console.log(rabbitMagic.jump());
console.log(rabbitMagic.pet());
console.log(rabbitMagic.say('hhhh'));