//Date
// moment.js
var moment = require('moment');
// var now = new Date();
// var myBirthday  =  new Date( 1996, 8, 4);//04-09-1996

// // number of millisecond form 1 - 1 - 1970
// console.log(now.getTime());
// console.log(myBirthday.getTime());
var now = moment('2020-04-29 18:00');
console.log(now.fromNow('2020-04-30 00:00'));