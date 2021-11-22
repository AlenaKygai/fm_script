const obj = {
  name:'pen',
  'is writen': true, // строка может быть именем свойства 
  11:78,
}

//доступ к свойству с возможностью вычисления , в квадратных скобках происходит
// вычисления переданного значения
const nameProperty = 'is writen';
console.log(obj[11]);
console.log(obj['11']);
console.log(obj['is writen']); 
console.log(obj['name']);
console.log(obj['nameProperty']);

