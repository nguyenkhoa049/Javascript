var fs=require('fs');
var co=require('co');
//vd dùng co đọc 3 file lần lượt theo thứ tự 123, xong 1 xong mới đọc 2 xong mới đọc 3
// Dùng Promise.all ko đảm bảo thứ tự
function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding:'utf-8'},function(err,data){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		});
	});
}
co(function*(){
	var song1 = yield readFilePromise('./song1.txt');
	var song2 = yield readFilePromise('./song2.txt');
	var song3 = yield readFilePromise('./song3.txt');
	return [song1,song2,song3];
}).then(function (values) {
	console.log(values);
	/* body... */
}).catch(function(error)
{
	console.log(err);
});