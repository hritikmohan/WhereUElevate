// DATE METHODS
console.log("DATE METHODS");

console.log(new Date());                                 // 2024-08-29T15:40:37.014Z
console.log(new Date().toString());                      // Thu Aug 29 2024 21:10:37 GMT+0530 (India Standard Time)
console.log(new Date().toLocaleString());                // 8/29/2024, 9:10:37 PM
console.log(new Date().toDateString());                  // Thu Aug 29 2024
console.log(new Date().toLocaleDateString());            // 8/29/2024
console.log(new Date().toTimeString());                  // 21:10:37 GMT+0530 (India Standard Time)
console.log(new Date().toLocaleTimeString());            // 9:10:37 PM
console.log(new Date().toISOString());                   // 2024-08-29T15:40:37.049Z
console.log(new Date().toUTCString());                   // Thu, 29 Aug 2024 15:40:37 GMT
console.log(new Date().toJSON());                        // 2024-08-29T15:40:37.049Z

// WAYS TO CREATE DATE OBJECT
console.log("WAYS TO CREATE DATE OBJECT");

console.log(new Date());
console.log(new Date("2024-08-29"));                                    // YYYY-MM-DD format
console.log(new Date(2024, 8));
console.log(new Date(2024, 6, 23));
console.log(new Date(2024, 3, 22, 20));
console.log(new Date(2024, 1, 30, 23, 58));
console.log(new Date(2024, 1, 30, 23, 58, 43));
console.log(new Date(2024, 1, 30, 23, 58, 43, 0));
console.log(new Date(5000000000000).toLocaleDateString());

console.log(Date.parse(new Date()));                                      // returns milliseconds from 1-Jan-1970


// DATE GET METHODS
console.log("DATE GET METHODS");

console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());	
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());             // returns difference in minutes



// DATE SET METHODS
console.log("DATE SET METHODS");

setDate()	                        // Set the day as a number (1-31)
setFullYear()	                    // Set the year (optionally month and day)
setHours()	                        // Set the hour (0-23)
setMilliseconds()	                // Set the milliseconds (0-999)
setMinutes()	                    // Set the minutes (0-59)
setMonth()	                        // Set the month (0-11)
setSeconds()	                    // Set the seconds (0-59)
setTime()                           // Set the time (milliseconds since January 1, 1970)

// console.log(new Date().toLocaleString("default", {
//     weekday: "long",
// }));
