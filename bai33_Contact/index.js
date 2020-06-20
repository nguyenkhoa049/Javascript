/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) 
 hoặc 1 phần số điện thoại
 */
var readLineSync = require('readline-sync');
var fs = require('fs');
var contacts = [];a

function loadContact () {
	var fsData = fs.readFileSync('./contact.json');
	contacts = JSON.parse(fsData);
	// body... 
}
//show contact
function showContact () {
	for (var i of contacts) {
		console.log(i.name, i.phoneNumber);
		// statement
	}
	// body... 
}
// create Contact
function createContact () {
	var name = readLineSync.question('Name: ');
	var phone = readLineSync.question('PhoneNumber: ');
	var contact = {
		name : name,
		phoneNumber : parseInt(phone)
	};
	contacts.push(contact);
	// body... 
}
// update Contact
function updateContact () {
	var temp = readLineSync.question('Nhập tên cần sửa:')
	for (var i = 0; i < contacts.length; i++)
	{
		if (contacts[i].name === temp) 
		{
			var editPhone = readLineSync.question('Phone new: ');
			contacts[i].phoneNumber = editPhone;
		}
	}
    console.log('Edit thanh cong');
	// body... 
}
// delete Contact:
function delelteContact () {
	  var deleteValue = readLineSync.question("Nhập phone cần xóa: ");
  for(var i = 0; i < contacts.length; i++){
    if(contacts[i].phoneNumber === deleteValue){
      contacts.splice(i, 1);
      
    }
  }console.log("Xóa thành công!");
	// body... 
}
// TIm kiem
function searchContact () {
	var searchValue = readLineSync.question("Thông tin cần tìm: ");
  	return contacts.filter(function(contact){
    if(contact.name.includes(searchValue) || contact.phoneNumber.includes(searchValue))
    {
      console.log("Name: " + contact.name, "\nPhone: " + contact.phoneNumber);
    }
  });
	// body... 
}
//Lưu và Thoát'
function saveExit () {
	var content = JSON.stringify(contacts);
  fs.writeFileSync('./contact.json', content, {encoding: 'utf8'});
	// body... 
}

function showMenu () {
	console.log('1. Thêm mới danh bạ');//done
	console.log('2. Sửa danh bạ');//done
	console.log('3. Xóa danh bạ');//done
	console.log('4. Tìm kiếm');//not done
	console.log('5. Xem danh bạ');//done
	console.log('6. Lưu và Thoát');//
	var chose = readLineSync.question('Chon:>');
	switch (chose) {
		case '1':
			createContact();
			showMenu();
			// statements_1
			break;
		case '2':
			updateContact();
			showMenu();
			break;
		case '3':
			delelteContact();
			showMenu();
			break;
		case '4':
			searchContact();
			showMenu();
			break;
		case '5':
			showContact();
			showMenu();
			break;
		case '6':
			saveExit();
			break;
		default:
			console.log('Wrong chose!');
			// statements_def
			break;
	}

	// body... 
}
function main () {
	loadContact();
	showMenu();


	// body... 
}
main();