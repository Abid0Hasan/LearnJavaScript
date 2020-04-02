/**
 * Spreads operators allow us to retrive
 * the value of an array and display it
 */

 const arrayOne = ['Marian','Anna','Alex'];
 const arrayTwo = ['Said','Ismail','Aisha'];

 const concatArray =[...arrayOne , ...arrayTwo];

 concatArray.forEach( function (name) {
     log(name);  
 });


 /** For String */

 const name = 'Mariyan';
 const nameToArray = [...name];
 nameToArray.forEach(function (letter) {
     log(letter);
 });

 /** For Numbers */

 const addNumbers = function (n1, n2, n3) {
     return n1 + n2 + n3;  
 }

 const numbers = [1,5,9];
 //const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
 const addition = [...numbers];
  log(addition);
