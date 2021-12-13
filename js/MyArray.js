/* data */
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

/* logic  */
function MyArrayProto(){
  this.push = function() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
/* убрать отрицательное значение у длины  */
  this.pop = function(){
    if(this.length===0){
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;

  }
  this.forEach = function(func){
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  }
  this.some = function(func){
    for (let i = 0; i < this.length; i++) {
      if(func(this[i])){
        return true;
      }
    }
    return false;
  }
this.every = function(func){
  for (let i = 0; i < this.length; i++){
    if(func(this[i]) === false){
      return false;
    }
  }
  return true;
  } 

  this.filter = function(func){
    const result = new MyArray();
    for (let i = 0; i < this.length; i++){
      if(func(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }
}
function isOdd(n){
  return n%2===1;
} 
function isEven(n){
  return n%2 === 0;
}
function bigTen(n){
  return n>10;
}

/* Protopype */
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1,3,14,21,4);
// myArray.push(2,2,2);
// myArray.pop();
// myArray.forEach(square);
// console.log(myArray);
console.log(myArray.filter(bigTen));