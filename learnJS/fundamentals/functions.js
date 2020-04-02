/**
 * A function is a block of code which is use to 
 * do an special task.
 */

 //How to declare a function 
 function addNumbers(n1, n2) {
     //Start of function body
     //Define logic
     //log(3+2)
     //log(n1 + n2)
     var result = n1 + n2;
     return result;


     //end of function body
     
 }

 var res = addNumbers(10, 20);
 log(res);


 var person = {name : "Abid", age: 28};
 log(Object.keys(person));
 log(Object.values(person));

 log("Jamse Bond".toLowerCase());
 log("Jamse Bond".toUpperCase());
 log("Jamse Bond".endsWith("Bond"));
 log("Jamse Bond".startsWith("James"));
