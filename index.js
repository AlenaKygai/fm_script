// вывести числа от макс д (в прядке убывания) кратные num

const showHRange = function(max,min,num){
 let i=max;
 while(i>=min){
   if(i%num===0){
   console.log(i);
  }
  i--;
 }
}
showHRange(20,10,3);

const showRangeRight = function(max,min,num){
  for (let i = max; i>= min; i--) {
    if(i%num === 0){
      console.log(i);
    }
  }
}
showRangeRight(30,10,4);