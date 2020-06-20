/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input:[1,2,3,4,1 ,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    var newArr = [];
    var a = arr.reduce(function(key,value){
        if(value in key)
        {
            key[value]++;
        }
        else
        {
            key[value] = 1; 
        }
        return key;
    },{});
    
    var max = 0;
    for( var i in a)
    {
        if(max < a[i]){
            max = a[i];
        }
    }
    for( var i in a)
    {
        if(a[i] === max)
        {
            newArr.push(i);
        }
    }
    return newArr.map(x => {
        return parseInt(x);
    });

}
console.log(findMostFrequent([1,2,3,4,1,2,2]));
