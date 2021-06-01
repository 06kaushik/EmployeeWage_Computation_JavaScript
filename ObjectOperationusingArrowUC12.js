const isParttime = 1;
const isFulltime =2;
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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

//To check Maximum Working Hours and Number of Working Days Conditions
while(totalempHrs <= maxHrsinMonth && totalWorkingdays < numofWorkingDays) {
totalWorkingdays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
totalempHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
empDailyWageMap.set(totalWorkingdays, calcDailyWage(empHrs));
empDailyHrsMap.set(totalWorkingdays, getWorkingHours(empCheck));
}

let empWage = calcDailyWage(totalempHrs);

console.log("Total Days: "+totalWorkingdays);
console.log("Total Hours: "+totalempHrs);
console.log("Daily Wage Array: "+empDailyWageArr);
console.log("Employee Wage: "+empWage);

console.log("UC-7A");
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

console.log("UC-7B");
//UC-7B Show the Day along with daily Wage using array helper function

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
   dailyCntr++;
   return dailyCntr + " = " +dailyWage;
}

let mapDaywithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map: "+mapDaywithWageArr);

console.log("UC-7C");
//UC-7C Show Days when Full time Wage of 160 were earned
function fulltimeWage(dailyWage) {
   return dailyWage.includes("160");
}

let fullDayWageArr = mapDaywithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter when full time wage earned: "+fullDayWageArr);

console.log("UC-7D");
//UC-7D Find the first occurence when full time Wage was earned using wage function
console.log("First Time full time wage was earned on Day: "+mapDaywithWageArr.find(fulltimeWage));

console.log("UC-7E");
//UC-7E Check if Every Element of Full Time Wage is truely holding Full Time Wage
console.log("Check all Element have full time Wage: "+fullDayWageArr.every(fulltimeWage));

console.log("UC-7F");
//UC-7F check if there is any Part Time Wage
function parttimeWage(dailyWage) {
   return dailyWage.includes("80");
}

console.log("Check if any part time Wage: "+mapDaywithWageArr.some(parttimeWage));

console.log("UC-7G");
//UC-7G Find the number of days the Employee worked
function totalDaysWorked(numofDays, dailyWage) {
   if(dailyWage > 0) return numofDays+1;
   return numofDays;
}

console.log("Number of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));

console.log("UC-8");
//UC-8 Store Daily Wage in a Map

console.log(empDailyWageMap);
console.log("Employee wage Map totalHrs: "+Array.from(empDailyHrsMap.values()).reduce(totalWages, 0));

console.log("UC-9");
//UC-9 Use Arrow Functions to calculate the wage

const findTotal = (totalVal, dailyVal) => {
     return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("TotalHours: "+totalHours);
console.log("Total Wages: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key ) => {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);

console.log("UC-10");
//To store Day, Hours Worked and Wage Earned in a Single Object

let totalEmpHrs =0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

while(totalempHrs <= maxHrsinMonth && totalWorkingDays < numofWorkingDays) {
     totalWorkingDays++;
     let empCheck = Math.floor(Math.random() * 10) % 3;
     empHrs = getWorkingHours(empCheck);
     totalempHrs += empHrs;
     empDailyHrsAndWageArr.push(
     { 
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = '+this.dailyWage
        }, 
     }); 
}

console.log("Daily Hours worked and Wage Earned: "+empDailyHrsAndWageArr);

console.log("UC-11");
//Object Operations using Helper functions

console.log("UC-11A");
let totalwages = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage , 0);
let totalhours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours , 0);
console.log("Total Hours:"+totalhours);
console.log("Total Wages: "+totalwages);

console.log("UC-11B");
let fullWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                           .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

console.log("UC-11C");
let partWorkingDayStrArr = empDailyHrsAndWageArr
                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                           .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part Working Days: "+partWorkingDayStrArr);

console.log("UC-11D");
let nonWorkingDayStrArr = empDailyHrsAndWageArr
                          .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                          .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non Working Days: "+nonWorkingDayStrArr);