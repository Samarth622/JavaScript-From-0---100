let myDate = new Date()

console.log(Date()) // it give me Indian Standard time like Mon Sep 23 2024 15:32:13 GMT+0530 (India Standard Time)
console.log(myDate) // it give time like 2024-09-23T10:06:52.125Z
console.log(myDate.getDate()) // it return current date like 23
console.log(myDate.getDay())  // it returns current day like 1 - Monday
console.log(myDate.getFullYear()) // it returns current year
console.log(myDate.getHours())  // it returns todays hours completed from 24 hours 
console.log(myDate.getMinutes()) // it returns current hour minutes out of 60 minute
console.log(myDate.getMonth())  // it returns the current date month
console.log(myDate.getTime())  // it returns the number of milliseconds for this date since the epoch - midnight at the beginning of January 1, 1970, UTC
console.log(myDate.getTimezoneOffset()) // it returns the difference, in minutes
console.log(myDate.toLocaleString())  // it convert the time in simple form like 9/23/2024, 3:44:01 PM
console.log(myDate.toDateString())  // it extract the date and day from large time string like Mon Sep 23 2024
console.log(myDate.toLocaleTimeString())  // it return only current clock time like 3:45:53 PM