
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

