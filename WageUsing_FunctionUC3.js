const isparttime = 1;
const isfulltime =2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr   = 20;

function getWorkingHours(empCheck) {
  
  switch(empCheck) {
    case 1:
        return parttimeHrs;
        break;
    case 2:
        return fulltimeHrs;
        break;
    default:
        return 0;
  }
}

let empHrs =0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);

let empWage = empHrs * wagePerHr;
console.log("Employee Wage: "+empWage);