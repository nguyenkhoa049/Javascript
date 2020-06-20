/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

/* Phương thức pop() xóa phần tử ở cuối một mảng và trả về phần tử đó. Làm thay đổi độ dài của mảng. */
var a = [1,2,3,4];
a.pop();// phần tư được xóa đi và trả về là 4;

/*
  *push Thêm một hoặc nhiều phần tử vào vị trí cuối mảng, trả về chiều  dài mới của mảng đó */
  var b = ['Tom', 'Teo', 'Ti'];
  b.push('Sửu', 'Dần');// Chiều dài mới của mảng là 5

  /*slice trả về một  mảng mới tham chiếu từ mảng ban đầu nhận các giá trị với chỉ số bengin đến  end(không tính vị trí end) mà không thay đổi mảng ban đầu */
  var c = ['A', 'Nguyễn', 'Đình', 'Khoa','C'];
  c.slice(1,4);//Mảng được trả về ['Nguyễn', 'Đình', 'Khoa' ]

  /*splice thay đổi phần tử của mảng bằng cách xóa hoặc thêm phần tử mới */
  var d = ['A', 'Nguyễn', 'Khoa'];
  d.splice(0,1);
 // console.log(d);
  d.splice(1,0,'Đình');
  //console.log(d);
  

  /*shift xóa đi phần tử đầu tiên  của mảng, trả về phần tử đó.*/
  var e = [1, 2, 3 , 4 ,5];
  e.shift(0);// phần tử xóa đi là 1
  //console.log(e);

  /*unshift thêm phần tử vào vị trí  đầu tiên của  mảng, trả về chiều dài mới của mảng đó*/
  e.unshift(1);

  /* map trả về một mảng  mới  với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi.
   */
  var maps = [1, 2, 3, 4];
  maps.map(function(x)
  {
    return x *2;
  });

  /*Phương thức find() sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng được cung cấp thỏa điều kiện. Hoặc có thể trả về undefined .
  */
  var finds = [1, 2, 8, 10, 9, 15];
  finds.find(function(x)
  {
    return x > 5;// trả về giá trị đầu tiên là 8, dù 10 > 5
  });

  /**
   * concat gộp 2 hay nhiều mảng tạo thành một mảng mới, không làm thay đổi các mảng đã có;
   */
  var con = ['Nguyễn'];
  var cat = ['Đình', 'Khoa'];
  con.concat(cat);//[ 'Nguyễn', 'Đình', 'Khoa' ]

  /**
   * findIndex  trả về  chỉ số index đầu tiên thỏa mãn hàm truyền vào. Nếu không có phần tử nào thõa mãn thì trả về -1
   */
  var findIndexs = [ 8, 1, 9, 10 , 15,  20];
  findIndexs.findIndex(x=> x>10);// gái trị Index 4 (15>10)

  /**
   * Phương thức includes kiểm tra xem phần tử đó có tồn tại trong mảng hay chưa trả về true false.
   */
  var inclu = [ 'ba','di', 'ben'];
  inclu.includes('ba');


  /**
   * indexOf() trả về index đầu tiên trong mảng khi phần tử đó được tìm thấy, nếu không tìm thấy trả về -1
   */
  var indexof = [ 1, 2, 3, 'A', 'b'];
  indexof.indexOf('A'); 

  /**
   * reverse() khi gọi bởi một mảng thì đảo ngược thứ tự của chính mảng đó. Phần tử đầu tiên của mảng trở thành phần tử cuối và ngược lại, phần tử cuối trở thành phần tử đầu tiên của mảng.
   */
  var rever = [ 1, 2, 3, 4, 5];
  rever.reverse();

  /**
   * reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải), với một  biến tích lũy thu về giá trị duy nhất
   */
  var redu = [ 1, 2, 3 ,4 ,5];
  redu.reduce(function(a,b){
    return a+b;
  },10); 

  /**
   * Filter() tạo một mảng mới  với tất cả phần tử thỏa mãn điều kiện
   */
   var fil = [ 4, 8, 6, 7, 8, 4, 9, 10];
   fil.filter( x => x>4);


