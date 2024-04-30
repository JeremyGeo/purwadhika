
var totalDays = 360;

var years = Math.floor(totalDays / 365);


var remainingDays = totalDays % 365;


var months = Math.floor(remainingDays / 30); 

var days = remainingDays % 30;

console.log("Years:", years);
console.log("Months:", months);
console.log("Days:", days);