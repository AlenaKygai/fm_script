
function User(firstName, lastName, age, isMale, email, isSubscribe = false){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribe = isSubscribe;
}

function UserPrototype(){
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
}

User.prototype = new UserPrototype();

function createRandomUsers(amount = 1){
  const db = [];
  for(let i=0; i < amount; i++){
    const user = new User(
      `Name${i}`,
      `LName${i}`,
      Math.ceil(Math.random()*60+20), // 20-80 years
      Math.random()>0.5 ,  // true || false
      `email${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
}

const users = createRandomUsers(100);
users.forEach(function(user){
  user.isSubscribe = (Math.random()> 0.5);
});
console.table(users);

/*получить массив полных имен полльхзователей, используя метод map */
const fullNameUsers = users.map(function(user){
  return user.fullName();
});
console.table(fullNameUsers);


/*получить массив пользователей, которые старше 65 */
function olderPerson(user){
  return user.age >= OLD_AGE;
}

const oldUsers = users.filter(olderPerson);
console.table(oldUsers);

/*получить массив пользователей, до 40 лет, женского пола у которого есть подписка */

function getSpecialFilter(user){
 return  user.age < 40 && !user.isMale && user.isSubscribe;
}

const newWomen = users.filter(getSpecialFilter);
console.table(newWomen);