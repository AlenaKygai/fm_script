/* logic  */
function MyArrayProto(){
  this.push = function(item) {
    this[this.length] = item;
    // this.length++;
    return ++this.length;
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
}
/* data */
function MyArray() {
  this.length = 0;
}
/* Protopype */
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray();





function sum() {
  console.log(arguments);
  let result=0;
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
}

console.dir(sum);

sum(1,2,3,4,54,23);
