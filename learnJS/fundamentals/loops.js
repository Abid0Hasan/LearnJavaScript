/**
 * Iterate one think multiple time
 */

var person =[
   {name : "Abid", age : 27},
   {name : "Hasan", age : 28}
];


//For loop
for(var i = 0; i <= person.length; i++){
   log(person[i].name);
   log(person[i].age);  
   log("-------------");    
}


//While Loop 
var number = 0;

while (false) {
    log(number);
    number += 1;
}

//While Loop with break
var number = 0;

while (number < 5) {
    log(number);
    if (number == 2) {
        break;
    }
    number += 1;
}

//While Loop with continue
var number = 0;

while (number < 5) {
    number += 1;
    if (number < 5) {
        continue;        
    }
    log(number);
    
}


//Do while loop

do {
    i++;
    log(i);
} while (false);