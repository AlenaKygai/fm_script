// объявление и инициализация счетчика итеррации
// условие захода в каждый итеррацию
for(let i=0; i<MAX_COUNT_TRY; i++){
  console.log(i);
  const password = prompt('Enter password');
  if (password === RIGHT_PASSWORD){
    alert('Thanks')
    break;
  }
  if(i+1===MAX_COUNT_TRY){
    alert('Try over');
  }
}

