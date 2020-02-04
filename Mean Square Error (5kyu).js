/**
 * Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
 */

var solution = function(firstArray, secondArray) {
var arr = [];
var n  = firstArray.length;
var i = 0;
for(i; i<n; i++){
    arr.push(secondArray[i]-firstArray[i]);
}
var square = arr.map(el => {
    return Math.pow(el, 2)
})
var sum = square.reduce((a,b)=>{
    return a+b;
})
var result = sum/n;
console.log(result)
return result
}



solution([1, 2, 3], [4, 5, 6])