const lang = prompt('Choose language:\n1 - ua\n2 - ru\n3 - it\n4 -en'); 


// if(lang==='1'){
//   console.log('Добрbй день');
// }else if(lang==='2'){
//   console.log('Добрый день');
// }else if(lang==='3'){
//   console.log('Bounjur');
// }if(lang==='4'){
//   console.log('Good day');
// }else {
//   console.log('Invalid input');
// }

switch (lang) {
  case '1':
    console.log('Добрbй день');
    break;
  case '2':
    console.log('Добрbй день');
    break;
    case '3':
      console.log('Bounjur');
      break;
      case '4':
        console.log('Good day');
        break;
  default:
    break;
}

console.log('Thanks');