const data = +prompt('Enter'); 

// пользователь должен ввести положительное больше ноля

// if(isNaN(data)){
//   console.log('invalid data');
// }else{
//   if(data>0){
//     if(data%5===0){
//       console.log('кратно 5');
//     }else{
//       if(data%3===0){
//         console.log('кратно 3');
//       }else{
//         if(data%2===0){
//           console.log('кратно 2');
//         }else{
//           console.log('simple data');
//         }
//       }
//     }
//   }else{
//     console.log('invalid data');
//   }
// }

if(isNaN(data)){
  console.log('invalid data'); // not a number
}else if(data>0){         // positiv number
    if(data%5===0){
      console.log('кратно 5');
    }else if(data%3===0){
        console.log('кратно 3');
      }else if(data%2===0){
          console.log('кратно 2');
        }else{
          console.log('simple data');
        }
    }else{ // negativ number 
    console.log('invalid data, must be positiv');
}
