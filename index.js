
let count = 0;
while(count<5){
    count++;
    console.log(count);     // сначало прибавили. потом залогировали
}
console.log('End loop');

// let count = 0;
// while(true){
//     if(++count>5){
//       break;
//     }
//     console.log(count);     
// }
// console.log('End loop');



let count = 0;
while(true){
    count++;
    if(count%2===1){
      continue;     // оператор перевода к началу новой итерраци
    }
    if(count>10){
      break;
    }
    console.log(count);     
}
console.log('End loop');
