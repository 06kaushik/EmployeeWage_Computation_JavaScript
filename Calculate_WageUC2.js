const isparttime = 1;
const isfulltime =2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr   = 20;

let empHrs =0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck) {
  case isparttime:
        empHrs = parttimeHrs;
        break;
  case isfulltime:
        empHrs = fulltimeHrs;
        break;
  default:
        empHrs = 0;
}

let empWage = empHrs * wagePerHr;
console.log("Employee Wage: "+empWage);