// 15. Determine if a year is a leap year or not.
let year = 1992;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) 
    console.log(`${year} is a leap year`);
else 
    console.log(`${year} is not a leap year`);