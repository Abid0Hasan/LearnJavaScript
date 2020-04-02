/**
 * Generator is a function that can be pause.
 */

 /** Syntex Of Generator Function */
 /**
  * function* name(){
  *    const variable = yield value;
  * }
  * 
  */

  /** We can use yield keyword multiple time */
  /**
   * function* numberGen(){
   *    
   *    const numOne   =  yield 1;
   *    const numTwo   =  yield 2;
   *    const numThree =  yield 3;
   * }
   * 
   * const gen = numberGen();
   */
  /** Generator Method */
  /**
   * gen.next();       * next is an object 
   * gen.next().value; * value is a property of next
   * gen.next().done;  * done is a boolean which indicate 
   *                   * whether your generator is finish
   */

   /** Generator Implementation */
   const getNumbers = function* () {
       yield 1;          /** we can hold any type of value
                          *  in generator function using 
                          *  yield.
                          */
       yield "Hello";   
       yield true;
       yield {name: 'Abid'};
       return "I am done";

   }
   const numberGen = getNumbers();

   log(numberGen.next().value);
   log(numberGen.next().value);
   log(numberGen.next().value);
   log(JSON.stringify(numberGen.next().value));
   log(numberGen.next().value);
   

   /** Example  */

   const getNumbers = function* (numbers) {
       for (let i = 0; i < numbers.length; i++) {
           yield numbers[i];   
       }
   }

   const getNumbersGen = getNumbers([1,2,3,4,5]);

   const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if(next.done){
        log("This generator is done");
        clearInterval(interval);
    }else{
        const number = next.value;
        log(number);
    }
   }, 1000);

