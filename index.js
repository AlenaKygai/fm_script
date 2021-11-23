const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
console.log(obj2);
console.log(obj3);


//способ создавать объекты, без директивы NEW
//the same like this: const obj2 = Object();  WITHOUT OPERATOR NEW
function MyObj() {
  //new - создает пустой объект для функции конструктора
  //новый объект - this
  if(!new.target){
    return new MyObj();
  }
}

//WITHOUT OPERATOR(директива) NEW
const myObj = MyObj();
console.log(MyObj);
