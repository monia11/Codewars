
/**
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
 */
 

function generateHashtag (str) {

  var arr = ['#']
  var test1 = str.split('')
  var test2 = test1.filter(el => el != ' ')



 if(test2 == "" ){
return false
}else{
  
var splitStr = str.split(' ')

for(var i of splitStr){
  var a = i.split('');
  if(a[0] != undefined){
    var first = a[0].toUpperCase()
    arr.push(first)
    a.shift()
  }
  
  for(let j of a){
    arr.push(j)
}
}
}

 
 if(arr.length>140){
  return false
 }else{
  var result = arr.join('')
  return result
 }
  
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))

