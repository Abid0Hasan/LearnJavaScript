/**
 * 
 * 
 */

 /** Normal Code */
const getUser = () => {
    return{
        name: 'John',
        surname: 'doe',
        gender: 'male',
        address:{
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
            doorNumber: 22,
            street: 'LA st'
            }
        },
       age: 29
    }
};

const user = getUser();

const name = user.name;
const age = user.age;
const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;


log(name);
log(age);
log(country);
log(doorNumber);



 /** Edited Code 1 */
 const getUser = () => {
    return{
        name: 'John',
        surname: 'doe',
        gender: 'male',
        address:{
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
            doorNumber: 22,
            street: 'LA st'
            }
        },
       age: 29
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
const country = user.address.country; /** nested property */
const doorNumber = user.address.fullAddress.doorNumber;

/** Destructuring  */

const {name, age} = user; /** for normal type */

log(name);
log(age);
log(country);
log(doorNumber);





 /** Edited Code 2 */
 const getUser = () => {
    return{
        name: 'John',
        surname: 'doe',
        gender: 'male',
        address:{
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
            doorNumber: 22,
            street: 'LA st'
            }
        },
       age: 29
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
//const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const {name, age, address : {country : theCountry}} = user; /** for nested type */
                                                            /** We have to select first object first 
                                                             * then second object ,then property
                                                             */

log(name);
log(age);
log(theCountry);
log(doorNumber);



/** Edited Code 3 */
const getUser = () => {
    return{
        name: 'John',
        surname: 'doe',
        gender: 'male',
        address:{
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
            doorNumber: 22,
            street: 'LA st'
            }
        },
       age: 29
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
//const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const {name, age, address : {country : theCountry}} = user; /** for nested type */
                                                            /** We have to select first object first 
                                                             * then second object ,then property
                                                             */
const {address: {fullAddress : {doorNumber : number}}} = user;  
                                                            /** First we select the parent object,
                                                             then it has a property which is also 
                                                             an object (child of the parent).
                                                             then we select the child object whose 
                                                             property also an object, then we get the 
                                                             grandchild property and assaign ite value. 
                                                          */
                                                         /** Finally must say where it come from. */
log(name);
log(age);
log(country);
log(number);



/** Edited Code 4 */
const getUser = () => {
    return{
        name: 'John',
        surname: 'doe',
        gender: 'male',
        address:{
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
            doorNumber: 22,
            street: 'LA st'
            }
        },
       age: 29
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
//const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const {name : theName, age : theAge , address : {country : theCountry}} = user; /** we can put variable name as our wish and call it from log */
                                                             /** for nested type */
                                                            /** We have to select first object first 
                                                             * then second object ,then property
                                                             */
const {address: {fullAddress : {doorNumber : number}}} = user;  
                                                            /** First we select the parent object,
                                                             then it has a property which is also 
                                                             an object (child of the parent).
                                                             then we select the child object whose 
                                                             property also an object, then we get the 
                                                             grandchild property and assaign ite value. 
                                                          */
                                                         /** Finally must say where it come from. */
log(theName);
log(theAge);
log(country);
log(number);





