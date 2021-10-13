
const cat = {
  name: 'Cat',
  isMale: false,
  color: 'grey',
  breed: 'yard',
  age: '2',
  weight:'10',
  isSlipping:true,
  say:function(){
    return 'meow';
  },
  run:function(){

  },
};

cat.age++;

console.log(cat.say());
cat.countLegs = 4;
console.log(cat);
console.log(cat.name);
console.log(cat.isMale);
console.log(cat.age);

delete cat.isSlipping;

const cat2 = {
  name: 'Vasia',
  isMale: true,
  color: 'white',
  breed: 'yard',
  age: '2',
  weight:'5',
  isSlipping:false,
  say:function(){
    return 'meow-meow';
  },
  run:function(){
    return 'i\'m running '
  },
};
console.log(cat2);
console.log(cat2.say());