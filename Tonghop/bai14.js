/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    var strArr=str.split("");
   for(var i=0;i<str.length;i++){
       strArr[i]=String.fromCharCode(str.charCodeAt(i)+1);
   }
   return strArr.join("");
   // viết code ở đây.	
 }