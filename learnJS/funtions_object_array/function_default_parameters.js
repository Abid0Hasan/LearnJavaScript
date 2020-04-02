const calculatePay = (yearSalary, bonus) => {
    yearSalary + bonus;
}

log(calculatePay(22000)); /** Result will be NaN */ 


/** Solution 1 */

const calculatePay = (yearSalary, bonus = 0) => { /** Assain the value  */ 
    yearSalary + bonus;
}

log(calculatePay(22000)); /** Output: Successful execution */


/** Solution 2 */

const calculatePay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => { 
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000})); /** We can declare a object here */
