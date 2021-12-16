'use strict';

/* 
1. Инкапсуляция 
2. Наследование - это расширение классов
3. Полиморфизм
*/

class Squirrel{
  constructor(name,color){
    this.name = name;
    this.color = color;
  }
  jump(){
    return `${this.name} jumping`;
  }
}

class  FlyingSquirrel extends Squirrel{
  constructor(name,color,maxWayFly){
    super(name,color);
    this.maxWayFly = maxWayFly;
  }
  flying(){
    return `${this.name} flying to ${this.maxWayFly}`;
  }
}

class SquirrelPushkin extends Squirrel{
  constructor(name,color,maxWayFly,songs){
    super(name,color,maxWayFly);
    this.songs = songs;
  }
  dancing(){
    return `${this.name} dancing`;
  }  
  sing(){
    return `${this.name} sing ${this.songs.join(',')} `;
  }
}

const squirrelPushkin = new SquirrelPushkin('Magic', 'rainbow', '400m', ['fly to the moon', 'Titanium']);
console.log(squirrelPushkin);
console.log(squirrelPushkin.jump());
console.log(squirrelPushkin.flying());
console.log(squirrelPushkin.dancing());
console.log(squirrelPushkin.sing());