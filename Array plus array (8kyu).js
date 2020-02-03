

/**
 * 
 * I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */


function arrayPlusArray(arr1, arr2) {

    var sumArr1=0;
    var sumArr2=0;
    arr1.forEach(element => {
        sumArr1+=element;
        
    });
    
    arr2.forEach(element => {
        sumArr2+=element;
        
    });
        return sumArr1 + sumArr2;
      }