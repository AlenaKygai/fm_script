'use strict';

class Animal{
  constructor(name, amountOfLegs, type){   //constructor для описание данных 
    this.name = name;
    this.amountOfLegs = amountOfLegs;
    this.type = type;
  }
  get name(){
    return this._name;
  }
  set name(value){
    if(typeof value ==='string'){
      return this._name = value;
    }
    throw new TypeError('Name must be string');
  }
  eat(){
    return `${this._name} is eating`;
  }
  static isAnimal(obj){
    return obj instanceof Animal;
  }
}

const cat1 = new Animal('Pushok', 4, 'cat');
const dog1 = new Animal('Rem', 4, 'dog');
cat1.name = 'Barsik';

