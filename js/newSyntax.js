'use strict';

class UserClass{
  /**
   * 
   * @param {string} name 
   * @param {string} sname 
   * @param {number} age  0 - 150 
   */
  constructor(name,sname,age){
    if(typeof age!=='number'){
      throw new TypeError('Age must be number')
    }
    if(age < 0 || age> MAX_AGE){
      throw new RangeError(`Age must be > 0 and < ${MAX_AGE}`)
    }
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }

  checkAdult(){
    return this.age >= ADULT_AGE;
  }
}

const u2 = new UserClass('Tim', 'Li', 30);

console.log(u2.checkAdult());

class Worker{
  /**
   * 
   * @param {string} name 
   * @param {string} sname 
   * @param {number} rate 
   * @param {number} wdays 
   */
  constructor(name,sname,rate,wdays){
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.wdays = wdays;
  }
  getSalary(){
    return this.rate*this.wdays;
  }
}
const w1 = new Worker('Alena', 'Kygai','10','10');
console.log(w1.getSalary());