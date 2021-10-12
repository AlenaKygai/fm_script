/* 
человек вводит номер месяца, а мы выводим время года
1,2,12 -winter
3,4,5 - spring
6,7,8 - summer
9,10,11 - autumn 
*/

const numberOfMounth = prompt('Enter number of mounth');

switch (numberOfMounth) {
  case '1':
  case '2':
  case '12':
    console.log('Winter');
    break;

  case '3':
  case '4':
  case '5':
    console.log('Spring');
        break;
  case '6':
  case '7':
  case '8':
    console.log('Summer');
         break;
  case '9':
  case '10':
  case '11':
     console.log('Autumn');
      break;

      default:
        console.log('Invalid input');
        break;
}

