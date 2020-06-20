var start = new Date('2019/10/17');
// var oneday = 86400000;
//(1000*60*60*24);
// the event to time goes here:
//doSomethingForALongTime();
var end = new Date('2019/10/21');
var elapsed = end.getDay() - start.getDay(); // elapsed time in milliseconds
console.log(elapsed);