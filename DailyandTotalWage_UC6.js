const isparttime = 1;
const isfulltime =2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr   = 20;


//To Calculate working hours using Random function
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

//To calculate the Wage of the Employee
function calcDailyWage(empHrs) {
  return empHrs*wagePerHr;
}

const maxHrsinMonth =160;
const numofWorkingDays =20;
let totalempHrs =0;
let totalWorkingdays =0;
let empHrs = 0;
let empDailyWageArr = new Array();

//To check Maximum Working Hours and Number of Working Days Conditions
while(totalempHrs <= maxHrsinMonth && totalWorkingdays < numofWorkingDays) {
totalWorkingdays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
totalempHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalempHrs);

console.log("Total Days: "+totalWorkingdays);
console.log("Total Hours: "+totalempHrs);
console.log("Daily Wage Array: "+empDailyWageArr);
console.log("Employee Wage: "+empWage);