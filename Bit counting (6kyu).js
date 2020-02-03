
/**
 * 
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */




var countBits = function(n) {

    var bin = n.toString(2);
    
    var binSplit = bin.split('');
    
    var n = 0;
    var i = 0;
    
   var binIntConvert = binSplit.map(element => {
       return parseInt(element)
       
   });

   console.log(binIntConvert);


   for (i; i<binIntConvert.length; i++){
    n += binIntConvert[i];

   }

   
   return n
}