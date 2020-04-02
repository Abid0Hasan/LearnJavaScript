/**
 * The promises is an object, which is used for 
 * any asynchonus computations.
 * 
 * Represent a value which may be available now,
 * or in the future, or never.
 * 
 */

 /** Three States of Promises */
 /**
  * Pending: Initial state, not fulfilled or rejected. 
  * 
  * 
  * Fulfilled: meaning that the operation complete successfully.
  * 
  * 
  * Rejected: meaning that the operation failed.
  * 
  */


  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("data back from server");
      }, 3000);

      setTimeout(() => {
        reject("No data back from server, there is an error");
    }, 5000);
  });

  promise.then(response => {
       log(response);
       
  }).catch( error => {
       log(error);
  });