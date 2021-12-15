'use strict';

/*
функция которая приводит строку к такому кейсу 'To be or Not to be'
*/

const str = 'to BE or NoT TO Be';
  
function getCapitalizeStr(str){
  const arrWords = str.split(' ');
  const arrWordsUp = arrWords.map((word)=>{
    if(word){
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
    return;
  });
  return arrWordsUp.join(' '); 
}

console.log(getCapitalizeStr(str));


/*
function getCapitalizeStr(str){
  return str
  .split(' ')
    .map((word)=>{
      if(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      }
  })
  return arrWordsUp.join(' '); 
}
console.log(getCapitalizeStr(str));
*/
