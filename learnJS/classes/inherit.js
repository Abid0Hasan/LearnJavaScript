class Animal{
    constructor(name, age){
        log(`${name} is an animal and was created.`);
       this.name = name;
       this.age = age;
    }
    static iAmAStaticMethod(){
        log(`I am a static method inside of an animal class`);
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


/** Normal Dog Class */
class Dog {
    constructor(breed){
        this.breed = breed;
    }

    logBreed(){
        log(`${this.breed}`);
    }
}

const mike = new Dog('Bulldog');
mike.logBreed();



/** Class Dog Extending Animal Class */

class Dog extends Animal {
    constructor(name, age,breed){
        super(name, age);
        this.breed = breed;
    }

    logBreed(){
        log(`${this.name} is an ${this.breed}`);
    }

    logAgeFromDog(){
       super.logAge(); 
    }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAgeFromDog();


/** Class Dog Extending Animal Class */

class Cat extends Animal {
    constructor(name, age){
        super(name, age);
    }

    logAgeFromCat(){
       super.logAge(); 
    }
}

const josh = new Cat('Josh', 1);
josh.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp();


