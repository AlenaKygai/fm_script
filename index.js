
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

