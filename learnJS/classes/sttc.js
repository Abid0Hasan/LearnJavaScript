/**
 * A Static method Belongs to the class not 
 * the instance of object we created.
 */

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

Animal.iAmAStaticMethod();