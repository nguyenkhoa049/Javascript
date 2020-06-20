/**
 * Sử dụng kiến thức đã học khai báo object person gồm các property name, age, gender. 
 * Ví dụ:
 *  var person = {
 *    name: 'Pham Thinh',
 *    age: 25,
 *    gender: 'male'
 *  };
 */
//## Thay đổi giá trị của property

/*Dùng dấu `=` để gán lại giá trị ( giống như gán cho biến ).

var you = {
    gender: 'male'
};
you.gender = 'female';
console.log(you);*/
//Dùng toán tử delete gọi là hành động mutate object đó.
//delete you.name;
var person = {
    name: 'Nguyen Dinh Khoa',
    age: 24,
    gender: 'male',
    email: 'nguyendinhkhoa049@gmail.com'
};