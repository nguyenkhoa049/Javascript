// setTimeout
// clearTimeout
// setTimeout(fn, ms);//
//timer
console.log('Start');
function done(){
	console.log('Finish');
}
// var timeoutId = setTimeout(function done () {
// 	console.log('Finish');
// }, 1000);
var timeoutId = setTimeout(done, 1000);
console.log('Done');
clearTimeout(timeoutId);
