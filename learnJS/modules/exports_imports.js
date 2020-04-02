/**
 * We can export anything to our working folder and 
 * use it as our wish. 
 * 
 */

/** NAMED EXPORT  */
/**
 * A named export can import multiple 
 * value. 
 */
/** Import All */
//  import * as Math from './Maths';

/** Selective Import */
//  import {add, divide, PI} from './Maths';



/** DEFAULT EXPORT */
 import Animal from './Animal'

/**
 * A default export can import only single 
 * value. Classes and object can be a default export. 
 */

 //How to implement import

  log(Math.add(2,2));

  log(Math.subtract(2,2));  /** 
                            If we do selective import
                            then non select import doesn't 
                            work. so subtract and multiply 
                            are not work here.
                            */ 
  log(Math.multiply(2,2));
  log(Math.divide(2,2));
  log(Math.PI);


/** DEFAULT EXPORT */

var animal = new Animal();
log(animal.getClassType());
 