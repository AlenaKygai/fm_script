'use strict';

/* 
1. Инкапсуляция - сокрытие логики
2. Наследование - это расширение классов
3. Полиморфизм -способность функции обрабатывать данных разных типов
*/

class Figure{
  constructor(name){
    this.name = name;
    Figure.amount++;
  }
  getArea(){
  }
  static isFigure(){
    return obj instanceof Figure;
  }
  static amount = 0;
}

class Square extends Figure{
  constructor(a){
    super('Square');
    this.a = a;
  }
  getArea(){
    return this.a*this.a;
  }
}

class Triangular extends Figure{
  constructor(a,b,angle){
    super('Triangular');
    this.a = a;
    this.b = b;
    this.angle = angle;
  }
  getArea(){
    return this.a*this.b*Math.sin(this.angle*(180/Math.PI));
  }
}

class Circle extends Figure{
  constructor(r){
    super('Circle');
    this.r = r;
  }
  getArea(){
    return this.r*this.r*Math.PI;
  }
}

const t = new Triangular(3,4, 45);
const c = new Circle(10);

function getAreaFigure(figure){
return figure.getArea();
}

console.log(t.getArea());
console.log(c.getArea());