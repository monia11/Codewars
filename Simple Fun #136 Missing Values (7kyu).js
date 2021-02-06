/**
 * You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y.
 */

function missingValues(arr) {
    let number = {}
    arr.forEach((i)=>{
    if(number[i]){
        number[i]++
    }else{
        number[i]=1
    }
    })
    function getNumber(object, value) {
        return Object.keys(object).find(key => object[key] == value);
      }

  const x= parseInt(getNumber(number, 1))
  const y= parseInt(getNumber(number, 2))

  return x*x*y
  }


console.log(missingValues([1, 1, 1, 2, 2, 3]))
