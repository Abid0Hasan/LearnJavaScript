/**
 * When a function is call from inside an another 
 * function then it is known as callback 
 * function.
 */

 function calbackExample(name, callback) {
     log(callback(name));
 }


 calbackExample("Abid Hasan", function (name) {
     return "Hello" + name;
 });

 /**
  * A callback is function which is executed from an 
  * another function.
  */