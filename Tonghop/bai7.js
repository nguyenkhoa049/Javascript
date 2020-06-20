//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
    if(str ==='')
    {
        return true;
    }else{
        var countp = 0;
        var countpt = 0;
        for(var i in str )
        {
            if(str[i] === 'p'){
                countp ++;
            }
            if(str[i]=== 't'){
                countpt++;
            }
        }
        if(countpt === countp)
        {
            return true;
        }else return false;
    }
}
console.log(equal_pt('paatpsts'));