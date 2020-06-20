var fs=require('fs');
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
async function run () {
	var song1 = await readFilePromise('./song1.txt');
	var song2 = await readFilePromise('./song2.txt');
	return [song1, song2];
}
run().then(function (valuse) {
	console.log(valuse);
});