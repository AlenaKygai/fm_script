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
}
/* Protopype */
MyArray.prototype = new MyArrayProto();
MyArray.prototype.newMethod = function () {};

const myArray = new MyArray(1,2,15,23,2);
myArray.push(2,2,2);
myArray.pop();
myArray.forEach(square);
console.log(myArray);





// function sum() {
//   console.log(arguments);
//   let result=0;
//   for (let index = 0; index < arguments.length; index++) {
//     result += arguments[index];
//   }
//   return result;
// }

// console.dir(sum);

// sum(1,2,3,4,54,23);
