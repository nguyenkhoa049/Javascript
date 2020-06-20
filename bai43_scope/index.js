//Global scope
//Local scope
var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả?
//Bởi vì a  trong hàm foo() là biến local nên sau khi chạy foo() giá trị a global không thay đổi.
bar();
console.log(a); // Kết quả?
// Bởi vì bar() thay đổi a bên ngoài scope nên trả về  a = 2;
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
// 
