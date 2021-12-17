'use strict';

class MyArray{
  constructor(){
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
 pop(){
    if(this.length===0){
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;

  }
 forEach(func){
    for (let i = 0; i < this.length; i++) {
      func(this[i],i,this);
    }
  }
 some(func){
    for (let i = 0; i < this.length; i++) {
      if(this[i],i,this){
        return true;
      }
    }
    return false;
  }
every(func){
  for (let i = 0; i < this.length; i++){
    if(func(this[i],i,this) === false){
      return false;
    }
  }
  return true;
  } 

 filter(func){
    const result = new MyArray();
    for (let i = 0; i < this.length; i++){
      if(func(this[i],i,this)){
        result.push(this[i]);
      }
    }
    return result;
  }
  concat(myArrayInstance){
    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newMyArray.push(this[i]);
    }
    for (let i = 0; i < myArrayInstance.length; i++) {
      newMyArray.push(myArrayInstance[i]);
    }
    return newMyArray;
  }
//   flat(depth=1){
//     let result = new MyArray();
//     for (let i = 0; i < this.length; i++) {
//       const isArray = MyArray.isArray(this[i]);
//       if(isArray && depth){
// /*flat */
//         const subResult = this[i].flat(depth-1);
//         result = result.concat(subResult);
//       }else if(this[i]!==undefined){
//         result.push(this[i]);
//       }
//     }
//     return result;
//   }
flat(depth=1){
  let result = new MyArray();
  this.forEach((item) =>{
    if(MyArray.isArray(item) && depth){
        result = result.concat(item.flat(depth-1));
      }else if(item!==undefined){
        result.push(item);
      }
  });
  return result;
}


  static isArray(obj){
  return obj instanceof MyArray;
  }

  [Symbol.iterator](){
    let i = 0;
    const myArr = this;
    return {
      next(){
        return{
          value: myArr[i++],
          done: i>myArr.length,
        };
      }
    };
  }
}
