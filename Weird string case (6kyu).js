/**
 * 
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' '). 
 */



function toWeirdCase(string){
    var arr = string.split(' ');
    console.log(arr)
    var result = arr.map(el => {
        var word = el.split('')
        var wordLength = word.length;
        var i = 0;
        var n = [];
        console.log(word)
        for(i; i<wordLength; i++){
            if(i%2 === 0){
                n.push(word[i].toUpperCase())
            }else{
                n.push(word[i].toLowerCase())
            }
        }
    return n.join('');
      })

    return result.join(' ')

  }


  console.log(toWeirdCase( "Weird string case" ))