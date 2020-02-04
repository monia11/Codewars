/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
 */

function inArray(array1,array2){

var arr = []
array2.forEach(el => {
    var i = 0;
    for(i; i<array1.length; i++){
        if(el.includes(array1[i]) && !arr.includes(array1[i]) ){
            arr.push(array1[i])
        }else{
            continue
        }
    }
    
});

var result = arr.sort();
console.log(result);
return result
  }

  inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"] )