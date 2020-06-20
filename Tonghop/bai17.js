/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
maxOfSumChain([1,3,2],2) kq :5
*/
function maxOfSumChain(arr,k){
    var sorts = arr.sort(function(a ,b){
        return b - a;
    });
    var result =  sorts.slice(0,k);
    return result.reduce(function(a,b){
       
        return a +b;
    });
}
console.log(maxOfSumChain([1,3,2],2));