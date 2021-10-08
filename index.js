// //посчитать периметр  var1

// let sideSquare = prompt('Enter side square', '10');

// const getPerimetrSquare = function(){
//   return 4*sideSquare;
// }

// console.log(getPerimetrSquare());


//посчитать периметр  var2
// const getPerimetrSquare1 = function(sideSquare){
//   return 4*sideSquare;
// }

// console.log(getPerimetrSquare1(3));


//посчитать периметр  var3
// const getPerimetrSquare1 = function(a){
//   return 4*a;
// }

// console.log(getPerimetrSquare1(5));



let sideSquare = prompt('Enter side square', '10');
/**
 * 
 * @param {number} side 
 * @returns {number | null}
 */
const getPerimetrSquare = function(side){
  if(isNaN(side)){
    return null;
  }
  return 4*side;
}
/**
 * 
 * @param {any} value 
 * @returns {Number | Nan}
 */
const convertNumber = function(value){
    if(value === null || value === '' || isNaN(Number(value))){
      return NaN;
    }
    return Number(value);
}

console.log(getPerimetrSquare(33));
let changeSideSquare = convertNumber(sideSquare)
console.log(getPerimetrSquare(changeSideSquare));