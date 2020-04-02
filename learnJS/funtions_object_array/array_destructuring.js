/**\
 * Array destructuring -> Pulling values from an array 
 */

const names = ['Anna','Mariam','Joe','Mark','Matt'];
const anna = names[0];
const mariam = names[1];
const joe = names[2];
log(`${anna} ${mariam} ${joe}`)


/** Edited Code 1 */
const names = ['Anna','Mariam','Joe','Mark','Matt'];
//  const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, mariam, joe] = names; /** Actual variable name we defined */

log(`${anna} ${mariam} ${joe}`)


/** Edited Code 2 */
const names = ['Anna','Mariam','Joe','Mark','Matt'];

const [anna, , joe] = names; /** Actual variable name we defined */

log(`${anna} ${joe}`)


/** Edited Code 3 */
const names = ['Anna','Mariam','Joe','Mark','Matt'];

const [anna, , joe, ...restOfName] = names; /** pull data from array using spear operator */


log(`${anna}  ${joe}`);
log(restOfName);
