// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str){
    var temp = str.split('');
    temp.reverse().join('');
    return temp;
}
reverse('abc');
console.log(reverse());