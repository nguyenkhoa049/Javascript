//requirement
// a student management app that is able to:
//show current list
// add new student

var readLineSync = require('readline-sync');
var fs = require('fs');
var students = [{ name: 'Khoa', age: 24, sex: 'male' }];

function showStudent () {
	for (var i of students) {
		console.log(i.name, i.age, i.sex );
		// statement
	};
	// body... 
}
function loadData () {
	var fsData = fs.readFileSync('./sv.json');
	students = JSON.parse(fsData);
	// body... 
}

//add students
function createStudent () {
	var name = readLineSync.question('name: ');
	var age = readLineSync.question('age: ');
	var sex = readLineSync.question('sex: ');
	var student = {
		name :name,
		age : parseInt(age),
		sex : sex
	};
	students.push(student);

	// body... 
}
//
 function saveExit () {
 	var temp = JSON.stringify(students);
 	fs.writeFileSync('./sv.json', temp, {encoding: 'utf8'});
 	// body... 
 }
 function showMenu () {
 	console.log('1. Show all students.');
 	console.log('2. Add new students ');
 	console.log('3. Save and Exit ');

 	var choose = readLineSync.question('Chon option: ');
 	switch (choose) {
 		case '1':
 			showStudent();
 			showMenu();	
 			// statements_1
 			break;
 		case '2':
 			createStudent();
 			showMenu();
 			break;
 		case '3':
 			saveExit();
 			break;
 		default:
 		
 			console.log('Wroong choose!');
 			// statements_def
 			break;
 	}
 	// body... 
 }
 function main () {
 	loadData();
 	showMenu();
 	// body... 
 }
 main();