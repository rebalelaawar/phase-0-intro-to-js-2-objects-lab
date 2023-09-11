// Write your solution in this file!
const employee = {
 name: "Robert",
streetAddress: "2 Horizon Road"   
};

function updateEmployeeWithKeyAndValue(employee, key,value){
  const cloneEmployee = {...employee}
  cloneEmployee[key] = value

  return cloneEmployee
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee[key] = value
   return employee 

}
function deleteFromEmployeeByKey(employee,key){

    
   const cloneEmployee = {...employee}
   delete cloneEmployee[key] 
   return cloneEmployee
   
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
   delete employee[key]
   return employee


}
