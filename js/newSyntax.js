'use strict';

class UserClass{
  /**
   * 
   * @param {string} name 
   * @param {string} sname 
   * @param {number} age  0 - 150 
   */
  constructor(name,sname,age){
    this.name = name;
    this.sname = sname;
    this.age = age; // setter
  }
  //получить значения свойства
  get age(){
    return this._age;
  }
  //установить новое значение свойству
  set age(age){
    if(typeof age!=='number'){
      throw new TypeError('Age must be number');
    }
    if(age < 0 || age> MAX_AGE){
      throw new RangeError(`Age must be > 0 and < ${MAX_AGE} `);
    }
    this._age = age;
  }
  get fullName(){
    return `${this.name} ${this.sname}`;
  }
  set fullName(newFullName){
    if(typeof newFullName!=='string'){
      throw new TypeError('Name must be string');
    }
    const arrFullName = newFullName.split(' ');
    this.name = arrFullName[0];
    this.sname = arrFullName[1];
  }
  get checkAdult(){
    return this._age >= ADULT_AGE;
  }
  static createTestUser(){
    return new UserClass('Test', 'STest', 20);
  }
}

const u2 = new UserClass('Tim', 'Li', 30);

// console.log(u2.checkAdult());
u2.age = 48; // setter
console.log(u2.age); // getter


// class Worker{
//   /**
//    * 
//    * @param {string} name 
//    * @param {string} sname 
//    * @param {number} rate 
//    * @param {number} wdays 
//    */
//   constructor(name,sname,rate,wdays){
//     this.name = name;
//     this.sname = sname;
//     this.rate = rate;
//     this.wdays = wdays;
//   }
//   getSalary(){
//     return this.rate*this.wdays;
//   }
// }
// const w1 = new Worker('Alena', 'Kygai','10','10');
// console.log(w1.getSalary());