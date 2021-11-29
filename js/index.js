
function StudentPrototype (){
  this.toString = function() {
    return `${this.firstName} ${this.lastName} `;
  }
  this.go = function () {
    return `${this.firstName} go`;
  }
  this.eat = function () {
    return `${this.firstName} eating`;
  }
}
/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {boolean} isMale 
 * @returns instance Student
 */
function Student (firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  if(!new.target){
    return new Student(firstName, lastName, age, isMale);
  }
}

Student.prototype = new StudentPrototype();

const student1 = Student('Elon', 'Musk', 40, true);
console.log(student1.toString());
console.log(student1.go());
console.log(student1.eat());











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