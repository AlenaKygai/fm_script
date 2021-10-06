/*  
логическое сложение ИЛИ   || 
возвращает первую правду или последнюю ложь 
1+0=1 1+1=2 0+1=1 0+0=0

*/ 

/*  
логическое умножение И   && 
возвращает последнюю правду или первую ложь 
больше приоритет чем у ИЛИ
1*0=0 0*1=0 0*0=0 1*1=1 

*/ 
let cond = 10 && 'Elon';
console.log(cond);

let cond_1 = false ||  0;
console.log(cond_1);



let number = 100;
let min = 10;
let max = 20;

if (number<min || number>max){
  console.log('YOU WIN!', number);
}


// if(number>=min && number<=max){
//   console.log('YOU WIN!', number);
// }