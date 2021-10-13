
let count = 0;
while(count<5){
    count++;
    console.log(count);     // сначало прибавили. потом залогировали
}
/*
запрашивать у пользователя пароль, пока он не ввидет правильный
ограничиваем количество попыток 
*/

let count = MAX_COUNT_TRY;
while(true){
  const password = prompt('Enter password');
  count--;
    if(password === RIGHT_PASSWORD){
      alert('Thanks');
      break;
    }
    if(cont===0){
      alert('Try is over');
      break;
    }
}


