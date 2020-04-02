/**
 * Array is an special type of variable, who can hold multiple 
 * value of same type at a time.
 * array index start with 0.
 */

 /**
  * We can pass number as value in an array.
  * ex- var numbs = [1,2,3];
  * 
  * We can pass object as value in an array.
  * ex- var objs = [{},{},{}];
  * 
  * We can pass undefined as value in an array.
  * ex- var undf = [undefined, undefined, undefined]; 
  */

var names = ["Abid","Haasa","Jamal","Kamal"];

//Display an array
log(names);
//How to display single element of an array
log(names[0]);

//Check the length of an array
log(names.length);

//How to display all the element of an array
//using loop
for(var n of names){
    log(n);
}

//Using Foreach loop and print with index number
names.forEach(function (n, index) {
    log(index+ " - " + n)
});