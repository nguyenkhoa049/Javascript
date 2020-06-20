/**
 * Viết ra cách để tăng a lên 2 đơn vị (1 trong các cách trong phạm vi bài học)
 */
var a = 10;
a += 2;
/**
 * Viết ra một trong các cách khác nhau có thể (trong phạm vi bài học) để gấp đôi a
 */
var a = 10;
a *= 2;
var a = 10;
var h = 20;

/**
 * a: cạnh đáy của 1 hình tam giác
 * h: chiều cao của tam giác đó
 * Yêu cầu: khai báo biến s bằng diện tích của hình tam giác này 
 */
 
// viết code ở đây.
var s = 0;
s = a / 2 * h;
var width = 10;
var height = 20;

/**
 * width: Chiều rộng của 1 hình chữ nhật
 * height: Chiều dài của hình chữ nhật
 * Yêu cầu: 
 * - Khai báo biến s là diện tích của hình chữ nhật này.
 * - Khai báo biến p là chu vi của hình chữ nhật này.
 */
 
// viết code ở đây.
var s, p;
s = width * height;
p = (width + height) * 2;
/**
 * r: Bán kính của 1 hình tròn
 * s: Diện tích của hình tròn đó
 * pi: 3.14
 * Yêu cầu: 
 * - Khai báo biến p là chu vi của hình tròn này.
 * - Khao báo biến s là diện tích của hình tròn này.
 */
// viết code ở đây.
var r = 4;
var p, s;
p = 2 * r * 3.14;
s = r * r * 3.14;
//
var a = 10;
var b = 18;

var x = a--+b++-++b-++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
var x = a-- + b++ - ++b - ++a;
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
// x = 10 + 18 - 20 - 10 =-2
/////
var a = [1, 2];
var b = [1, 2];
console.log(a === b);
/* Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau.
Viết câu trả lời ở dưới đây.
2 mảng này trả về false vì so sánh giá trị tham chiếu của chúng, 
a và b tham chiếu tới 2 nơi khác nhau nên trả về false */