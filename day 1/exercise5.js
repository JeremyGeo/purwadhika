let date1 = new Date('2024-04-29')
let date2 = new Date('2024-05-5')

var differenceInDays = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

console.log("Difference in days:", differenceInDays);