// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
    var temp = str.slice(0,n);
    var temp2 = str.slice(-n);
    return temp +temp2;
}
console.log(newString('describle',2));