/**  object is just a collection of variable in JS.
 * JavaScript is not object oriented language, it is an 
 * object based programming language
*/

/** How tpo declare an object ?
 * var objectName ={ 
 *     propertyName: value,
 *     propertyName: value
 *     };
*/

var  person = {
    name: Abid,
    age: 27,
    hasDrivingLisence: true,
    dateOfBirth:"16/09/1996",
    address: {
        firstLine: "Nurerchala, Vatara, Dhaka",
        postCode: "1229",
        country: "Bangladesh"
    }
};

//Way of display an object.
log(JSON.stringify(person));

//How to access the property of an object ?
log(person.name);
log(person.age);
log(person.hasDrivingLisence);
log(person.dateOfBirth);

//How to display an inner object ?
log(JSON.stringify(person.address));

//How to display all the value of an object at once ?
log(Object.values(person));


