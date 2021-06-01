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

//UC-7A Calculate total Wage using Array forEach traversal or reduce method
let totalEmpWage =0;

function sum(dailyWage) {
   totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("Total Employee wage: "+totalEmpWage);

function totalWages(totalWage , dailyWage) {
    return totalWage + dailyWage;
}

console.log("Employee Wage with Reduce Method: "+empDailyWageArr.reduce(totalWages, 0));

//UC-7B Show the Day along with daily Wage using array helper function

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
   dailyCntr++;
   return dailyCntr + " = " +dailyWage;
}

let mapDaywithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map: "+mapDaywithWageArr);

//UC-7C Show Days when Full time Wage of 160 were earned
function fulltimeWage(dailyWage) {
   return dailyWage.includes("160");
}

let fullDayWageArr = mapDaywithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter when full time wage earned: "+fullDayWageArr);

//UC-7D Find the first occurence when full time Wage was earned using wage function
console.log("First Time full time wage was earned on Day: "+mapDaywithWageArr.find(fulltimeWage));


//UC-7E Check if Every Element of Full Time Wage is truely holding Full Time Wage
console.log("Check all Element have full time Wage: "+fullDayWageArr.every(fulltimeWage));

//UC-7F check if there is any Part Time Wage
function parttimeWage(dailyWage) {
   return dailyWage.includes("80");
}

console.log("Check if any part time Wage: "+mapDaywithWageArr.some(parttimeWage));

//UC-7G Find the number of days the Employee worked
function totalDaysWorked(numofDays, dailyWage) {
   if(dailyWage > 0) return numofDays+1;
   return numofDays;
}

console.log("Number of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));