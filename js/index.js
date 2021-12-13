
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

const users = createRandomUsers(50);
console.table(users);