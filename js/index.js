'use strict';

// const MyArray1 = new MyArray(1,undefined,1,new MyArray(2,2),1,1);
// const MyArray2 = MyArray1.flat(1);
// console.log(MyArray2);

const arr = [1,5,3,5,89,8,4,56,8,9,2,1,5];
// константная сложность O(1)
console.log(arr[4]);

//линейная сложность  
const linerSerach = (arr,key) =>{
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === key){
      return i;
    }
  }
  return -1;
}
console.log(linerSerach(arr,5)); // result 1
console.log(linerSerach(arr,55)); // result -1
console.log(linerSerach(arr,89)); // result 4

//квадратичная сложность O(n^2)
const createTableMult = (limit) =>{
  const table = [];
    for (let i = 1; i <= limit; i++) {
      for (let j = 1; j <= limit; j++) {
        table.push(`${i}*${j} = ${i*j}`);
      }
    }
  return table;
}
console.log(createTableMult(5));


//логарифмическая сложность O(logn)
const sortedArr = [1,3,5,8,12,15,19,40];

const binarySearch = (arr, key) =>{
  let start = 0;
  let end = arr.length-1;
  let middle;
  while(start <= end ){
    middle = Math.round((start + end)/2);
    if(arr[middle] === key){
      return middle;
    }
    if(arr[middle] < key){
      start = middle + 1;
    }else{
      end = middle - 1;
    }
  }
  return -1;
}
console.log(binarySearch(sortedArr,15));