
//Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

const nums = [1,2,3,4,5];

function square(n){
  console.log(n*n);
  return n*n;
}

// for (let i = 0; i < nums.length; i++) {
//   square(nums[i]);
// }

nums.forEach(square);

nums.forEach(
  function(n){
    console.log(n*n*n);
    return n*n*n;
  }
)