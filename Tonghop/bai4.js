// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
    return (a > b) && ( a >c ) ? a : (b > c) && (b > a) ? b : c;
}
console.log(findMax(7,10,6));        
//console.log(findMax());