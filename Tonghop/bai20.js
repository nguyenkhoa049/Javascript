/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
    var max = 0;
    for(var i = 0 ; i <= arr.length; i++)
    {
        for(var j = 0; j <= arr.length; j++)
        {
            var temp = Math.abs(arr[i]) - Math.abs(arr[j]);
            if(max < temp)
            {
                max = temp;
            }
        }
    }
    return max;
}
console.log(findmaxDiff([1, 2, 3, 18, 9]));s