//таблица умнажения, где пример это свойста , 
//  значение- это решение этого примера

// const table = {
//   '2 * 2 =' : 4,
//   '2 * 3 =' : 6,
// }

const obj = {};
obj.prop1 = 12;
obj['prop2'] = 22;

const craeteMultiplicationTable = function(min,max){
  const table = {};
  for(let i=min; i<=max; i++){
    for(let j=1; j<=max; j++){
      //доступ к свойству с возможностью вычисления
      table[`$(i) * $(j) = `] = i*j;
    }
  }
  return table;
}
console.log(craeteMultiplicationTable());


const getNumber = function(str,obj){
  return obj[str];
}

const str = '2 * 3 =';
const table = craeteMultiplicationTable();
console.log(getNumber(str,table));