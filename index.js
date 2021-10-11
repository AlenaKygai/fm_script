
const isAdult1 = function(age){
  return age>=18;
}

const isAdult = function(age){
  // if(age>=18){
  //   return 'adult';
  // } else{
  //   return 'not adult';
  // }

  return age>=18 ? 'adult' : 'not adult' ;

}
console.log(isAdult(150));

const lpgIsAdult = function(age){
  const adult = age>=18 ? 'adult' : 'not adult' ;
  console.log(adult);
}
lpgIsAdult(15);

/* 
Функция запрашивает ввод у пользователя и говорит спасибо,
если что-то ввели, или пишет сообщение о том, 
что ничего не введено

1. придумать имя функции
2. принимает функция аргументы или нет ?
3. запросить данные
4. проверить данные на существования и вывести сообщение 

*/

const data = prompt('Enter'); // от prompt возвращает либо string либо ' '  либо null

const logDataInfo = function(info){
  console.log( info?'спасибо, вы ввели : '+ info : 'вы ничего не ввели');
}
logDataInfo(data);


const summa=12345;
const sale = summa>10000 ? 20 : 
              summa>5000 ? 10 : 50;
