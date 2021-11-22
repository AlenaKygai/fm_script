
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
  this.fulllName = function(){
    return this.name + ' ' + this.sname;
  }
}

const userIrina = new User('Irina', 'Frolova', 25);
const userVasia = new User('Vasia', 'Volskia', 35);
const userMiha = new User('Miha', 'Kalugin', 27);

console.log(userMiha.fulllName());

//создать функцию конструктор Country
//  name,population,area 
//создать Country
//создать метод который возвращает плотность населения 

function Country(name,population,area){
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function(){
    return this.population/this.area;
  }
}

const countyUkraine = new Country('Ukraine',43733762,579320);
console.log(countyUkraine.getDensity());
const countryItaly = new Country('Italy', 60461826, 294140);
console.log(countryItaly.getDensity());

// Car

function Auto(name,maxSpeed){
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function(value){
    if(value<0){
      return false;
    }
    this.speed +=value; 
    if(this.speed>this.maxSpeed){
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };
  this.deaccelerate = function(value){
    if(value<0){
      return false;
    }
    this.speed -= value; 
    if(this.speed<0){
      this.speed = 0;
    }
    return this.speed;
  };
  this.stop = function(){
    return (this.speed=0);
  }
};

const car = new Auto('bmw', 100);

console.log(car.deaccelerate(50));
console.log(car.accelerate(150));

// CofeeMachine
// brand
// maxVolume
// volume=0

// isOn = false

// method:
// addWater(value)
// makeCoffee(value) 
// * turnOn()


function CoffeMachine(brand, maxVolume, volume = 0, isOn = 'false'){
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.volume = volume;
  this.isOn = isOn;

  this.addWater = function(value){
    return this.volume += value;
  }

  this.turnOn = function(){
    if (this.isOn = false){
      return this.isOn = true;
    } else{
      return 'Machine is On';
    }
  }

  this.makeCoffee = function(value){
    if (this.isOn == true || value < 0 || this.volume >= value){
      return this.volume -= value;
    } else {
      return 'Check isOn or volume';
    }
  }
}

