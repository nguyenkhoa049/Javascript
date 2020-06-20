// var fs = require('promise-fs');
// fs.readFile('song.txt',{ encoding: 'utf8' })
// .then(function  (song) {
// 	console.log(song);
// })
// .catch(function  (error) {
// 	console.log(error);
// 	// body... 
// })
var fs = require('fs');

 function readFilePromise (path) {
 	return new Promise(function  (resolve,reject) {
		
	 	fs.readFile(path,{ encoding: 'utf8' },function (err,data) {
	 		resolve(data);
	 		// body... 
	 	});
	});
}
 readFilePromise('song.txt')
 .then(function  (song) {		
 	console.log(song);
 	// body... 
 })
 .catch(function(error){
 	console.log(err);
 });