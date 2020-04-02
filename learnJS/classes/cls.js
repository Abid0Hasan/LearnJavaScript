class Animal{
    constructor(name, age){
        log(`${name} is an animal and was created.`);
       this.name = name;
       this.age = age;
    }
  eat(){
     log(`${this.name} is eating`);
  }
  sleep(){
    log(`${this.name} is sleep`);
  }
  wakeUp(){
    log(`${this.name} is waking Up`);
  }
  logAge(){
    log(`${this.name} is ${this.name} year old`);
  }

}

const bobby = new Animal("Bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

log('-----------------');

const marshall = new Animal("Marshall", 2);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();
