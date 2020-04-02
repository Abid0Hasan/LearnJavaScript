/** Solution 1 */

const person = {
    name: 'Alex',
    cars: ['Ferrari','Lambo'],
    toString: function () {
      log(`${this.cars} has ${this.cars}`); 
    }
}

person.toString();


/** Solution 2 */

/**
 * It does not work because the inner function does not 
 * reffer the outer object
 */
const person = {
    name: 'Alex',
    cars: ['Ferrari','Lambo'],
    toString: function () {
      this.cars.forEach(function(car){   /** ERROR */
        log(`${this.cars} has ${cars}`)
      }.bind(this))  /** Solution using bind() -> method */
    }
}

person.toString();

/** Solution 3 */
const person = {
    name: 'Alex',
    cars: ['Ferrari','Lambo'],
    toString: function () {
      const that = this;
      this.cars.forEach(function(car){
        log(`${that.cars} has ${cars}`)
      });  
    }
}

person.toString();


/** Solution 4 Using arrow function*/
const person = {
    name: 'Alex',
    cars: ['Ferrari','Lambo'],
    toString: function () {  /** We cannot use arrow here, if we do
                                 that then (this keyword) stop
                                 communication again between them
                                 and show an error.
                              */
      this.cars.forEach(car => {
        log(`${this.cars} has ${cars}`)
      });  
    }
}

person.toString();