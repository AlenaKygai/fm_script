
class LinkedListIterator{
  constructor(list){
    this.list = list;
    this.currentElement = null;
  }
  next(){
    this.currentElement = this.currentElement 
    ? this.currentElement.next 
    : this.list.head;
    return{
      value: this.currentElement ? this.currentElement.value : undefined, 
      done: !this.currentElement,
    }
  }
}

class ListItem{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value(){
    return this._value;
  }
  set value(value){
    this._value = value;
  }
}

class LinkedList{
  constructor(...args){ // items === array
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const argument of args) {
      this.push(argument);
    }
  }
  push(argument){
    const newItem = new ListItem(argument); // Vasya
    if(this.length === 0){
      this.head = newItem;
      this.tail = newItem;
    }else{
      this.tail.next = newItem;             // Petya.next = Vasya
      newItem.prev = this.tail;             // Vasya.prev = Petya
      this.tail = newItem;                  // Vasya = tail 
    }
    return ++this.length;
  }
  [Symbol.iterator](){
    return new LinkedListIterator(this);
  }
}

const list = new LinkedList(1, true, {},58 , 'qwertty' );

console.log(...list);