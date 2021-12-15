'use strict';

class UserClass{
  constructor(name,sname,age){
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