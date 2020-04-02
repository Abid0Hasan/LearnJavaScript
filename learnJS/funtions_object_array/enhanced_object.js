/**
 * 
 */

 /** Normal Object */

 const calculator = name => {
   
    return{
        name: name
    }
 }

 const calc = calculator('Casio');

 log(calc.name);


  /** Enhanced Object */

  const calculator = name => {
   
    return{          /** Actual argument are same as property
                        name then we actual property name with
                        colon. ()
                      */
         name       /** if our return type property value and parameter
                        are same then we can return parameter
                        as property.
                    */
    }
 }

 const calc = calculator('Casio');

 log(calc.name);



 /** Solyution 2 */

  /** Normal Object */

  const calculator = name => {
   
    return{
        name,
        add: function (n1, n2) {
            return n1 + n2;
        }
    }
 }

 const calc = calculator('Casio');

 log(calc.name);
 log(calc.add(10, 20));


   /** Enhanced Object */

   const calculator = name => {
   
    return{
        name,
        add(n1, n2) {   /** Remove the function with colon  */
            return n1 + n2;
        }
    }
 }

 const calc = calculator('Casio');

 log(calc.name);
 log(calc.add(10, 20));


 /** Solution 3 */
 /** Normal Object */

 const calculator = name => {
   
    return{
        name,
        add(n1, n2) {   /** Remove the function with colon  */
            return n1 + n2;
        }
    }
 }

 const calc = calculator('Casio');

 log(calc.name);
 log(calc.add(10, 20));


  /** Enhanced Object */

  const pricePropName = "PRICE";
  const calculator = (name, price) => {
   
    return{
        name,
        add(n1, n2) {   /** Remove the function with colon  */
            return n1 + n2;
        },
        [pricePropName.toLowerCase()] : price
    }
 }

 const calc = calculator('Casio');

 log(calc.name);
 log(calc.add(10, 20));
 log(calc.price);



