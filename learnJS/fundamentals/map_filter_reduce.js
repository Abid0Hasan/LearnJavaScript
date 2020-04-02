/**
 * Map are used to modify the array 
 */
/** MAP */
var map = [1,2,3,4,5].map(function (n) {
   return n * 2;
});

log("[].map");
log(map);




/**
 * Filter are used to get the value of an array which
 * is satisfy the condition.
 * 
 */

 /** FILTER */
 var filter = [1,2,3,4,5].filter(function (n) {
    return n % 2 == 0;
});

log(filter);




/**
 * Reduce are used to
 * Reduce values inside of an array into one
 */

 /** REDUCE */
var reduce= [1,2,3,4,5].reduce(function (accumulate, current) {
    return accumulate + current; 
 });
 
 log(reduce);