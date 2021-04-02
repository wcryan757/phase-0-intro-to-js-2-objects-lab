// Write your solution in this file!
const employee = {
    
    name: "Bob",
        
    streetAddress: "Saget Street"
        
    
}



// *** Once you've initialized the employee Object, you'll need to create the following four functions: *** //


//updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value //

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newObj = {...employee}

    newObj[key] = value;

    return newObj;
} 

//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in //

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee
 
}

//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. //

function deleteFromEmployeeByKey(employee, key) {

    const modObj = {...employee}
    
    delete modObj[key]

    return modObj
}



//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object. // 

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key]

    return employee
}