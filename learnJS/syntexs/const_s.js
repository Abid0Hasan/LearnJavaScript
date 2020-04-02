/**
 * (const) variable are immiutable.
 * that means we can not change it later
 * after assining once.
 */

 /** 
  * why should use const
  */

  //let name = 'Maria';
  
  //const name = 'Maria'; 
   /** Only const can fix this instead using let */

//   name = {};
//   name = 2; 
  /** in that case the output will be 2 */
/**
  String name = 'Maria';
  name = 1;
  */

  const person = {};
  person['name'] = 'Maria';

  log(person.name);

  const array = [];
  array.push('Maria from array');

  log(array[0]);
  
