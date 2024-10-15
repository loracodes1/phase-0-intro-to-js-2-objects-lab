// Write your solution in this file!
const employee = {
    name: "florence",
    streetAddress: "11 Broadway"
  };
  
function updateEmployeeWithKeyAndValue(employee, key, value){
    return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){}
function deleteFromEmployeeByKey(employee, key){}
function destructivelyDeleteFromEmployeeByKey(employee, key){}