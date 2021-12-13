const users = [{id:1}, {id:2}, {id:3}];

function addSubscribe(user){
  user.isSubscribing = true;
}

users.forEach(addSubscribe);

function isEven(n){
  return n%2 === 0;
}