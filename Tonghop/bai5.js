// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
    return str.indexOf(str.indexOf('Java') === 0);
};
console.log(startWith('Java'));