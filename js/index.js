'use strict';

/* 
1. Инкапсуляция 
2. Наследование - это расширение классов
3. Полиморфизм
*/

class User{
  constructor(name,sname,age){
    this.name = name;
    this.sname = sname;
    this.age = age;
    this.isBun = false;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  static isUser(obj){
    return obj instanceof User;
  }
}

class Moderator extends User{
  constructor(name,sname,age,rule){
    super(name,sname,age); //вызывает конструктор родительского класса
    this.rule = rule;
  }
  addMessage(message){}
  removeMessage(id){}
}

class Admin extends User{
  constructor(name,sname,age, mail){
    super(name,sname,age); //вызывает конструктор родительского класса
    this.mail = mail;
  }
  toggleBan(obj){
    if(User.isUser(obj)){
    obj.isBun = !obj.isBun;
    }
  }
}

class Owner extends Admin{

}
class God extends Owner{

}

const user = new User('Test', 'STest', 33);
const moder = new Moderator('Test', 'STest', 34 , true);
const admin = new Admin('Elon', 'Musk', 37, 'musk@gmail.com');