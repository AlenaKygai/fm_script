
function Cat(name,isMale,color,breed,age){
  this.name = name;
  this.isMale = isMale;
  this.color = color;
  this.age = age;
  this.breed = breed;
  this.say = function(){
    return 'meow';
  }
}

const catVasia = new Cat('Vasia',true,'white','yard',2); // создание нового экземпляра объекта
const kitty = new Cat('Kitty',false,'green','yard',1); 
const catPushok = new Cat('Pushok',true,'black','yard',4); 

console.log(catPushok.name+' says '+catPushok.say());


//создать функцию конструктор для пользователя
//  name,sname,age 
//создать трех пользователей 
//создать метод который возвращает full name

function User(name,sname,age){
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.fullName = function(){
    return this.name + ' ' + this.sname;
  }
}

const userIrina = new User('Irina', 'Frolova', 25);
const userVasia = new User('Vasia', 'Volskia', 35);
const userMiha = new User('Miha', 'Kalugin', 27);

console.log(userMiha.fullName());