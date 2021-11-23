/* logic  */
function MyArrayProto(){
  this.push = function(item) {
    this[this.length] = item;
    // this.length++;
    return ++this.length;
  }
}
/* data */
function MyArray() {
  this.length = 0;
}
/* Protopype */
MyArray.prototype = new MyArrayProto();


const myArray = new MyArray();
const myArray2 = new MyArray();
// console.log(myArray);
// console.log(myArray.push===myArray2.push); // true


const arr = [];
arr.push(1);
// console.log(arr);
const arr2 = [];
// console.log(arr.push===arr2.push);  // true