//creating given class
class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate
   //creating parameterized constructor with given parameters using var args
   constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  get name() {return this._name;}
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name))
    this._name = name;
    else throw 'Invalid Name!';
  }

  toString() {
     return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary +
               ", gender = "+ this.gender +", startDate = "+this.startDate;
  }
}
  let employeePayrolldata = new EmployeePayrollData(1, "Himanshu",76000,"M","2021-11-10");
  console.log("Payroll Data: "+employeePayrolldata.toString());
  //using try catch block to check name validation
  try{
  employeePayrolldata.name = "catheline";
  console.log(employeePayrolldata.toString())
  }catch(e){
    console.error(e);
  }
  let newemployeePayrolldata = new EmployeePayrollData(1, "Steve", 50000 ,"M", "2020-05-31");
  console.log("New Payroll Data: "+newemployeePayrolldata.toString());