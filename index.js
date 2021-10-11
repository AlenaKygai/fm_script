
const logWord = function(word='Hi', sign='!'){
  console.log(word+sign);
}

logWord();
logWord('Elon Musk');
logWord(undefined,'?'); //чтобы осталось первое значение по умолчанию 


// создать функцию проверка на кратность, которая принимает два числа и проверяет
// кратность первого вторым

//оператор сравнения возврщает true & false 
const checkMultiplicity = function (number1 , number2) {
  return number1 % number2 === 0;

}
console.log(checkMultiplicity(20,4));
console.log(checkMultiplicity(20,3));


// человек вводит числою Функция возвращает правду если это число больше 20 
// и кратно 7. В остальных случаях возвращает ложь 

// const checkIpnutNumber = function(num1){
//   return num1>20 && num1%7===0;

// }
// console.log(checkIpnutNumber(prompt('Enter number')));

// проверить могут ли быть три числа сторонами треугольника 

const checkTriangle = function (a,b,c) {
  return a+b>c && a+c>b && b+c>a ;
}
console.log(checkTriangle(4,5,10));
console.log(checkTriangle(5,6,10));


// решение квадратного уравнения
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {null | number[]}
 */
const solveSquareEquation = function(a=1,b=1,c=1){

  const D = b*b-4*a*c;
  if(D<0){
    return null;
  }
  if(D===0){
    const  x = -b / (2*a);
    return x;
  }
  const  x1 = (-b + D**0.5) / (2*a);
  const  x2 = (-b - D**0.5) / (2*a);
  return [x1,x2];
}

console.log(solveSquareEquation(-1,-2,15));
console.log(solveSquareEquation(1,12,36));
console.log(solveSquareEquation(5,3,7));
console.log(solveSquareEquation( ));
console.log(solveSquareEquation(undefined,undefined,200));