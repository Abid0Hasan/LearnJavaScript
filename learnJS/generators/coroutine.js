/**
 *  To use generator with promises we
 *  use bluebird for web and (co) for backend - node
 * 
 */
/** Generator With Promise */
 /**
  * function* numbersGen(){
  *    
  *   const response = yield promise  * It doesn't know 
  *                                   * what is it, and what to do
  *                                   * with it.
  * }
  */

  /** Solution */
   coroutine(function* numbersGen(){
       const response = yield promise;
       const response = yield promise;
       const response = yield promise;
       const response = yield promise;
   });