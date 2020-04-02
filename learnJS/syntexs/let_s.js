/**
 * If we declare any variable with var keyword
 * then it will be access from anywhere.
 * there would be a solution that
 * Local variable (let) can prevent access the
 * variable anywhere.
 */

 /**
  * because it assaign the value before acessing the 
  * for loop.
  */

 for(var i = 0; i < 10 ; i++){ /** Now solution would be that
                                   we can use local variable 
                                   (let) instead of (var) which
                                   can be access from for loop only.
                                */

       log(i);  
 }
 log(i); /** it will be print again */