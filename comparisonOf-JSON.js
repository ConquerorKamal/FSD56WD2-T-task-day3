//how to compare the two JSON objects same properties without order?

// while i was doing some research about JSON comparison,i got to know that there are 2 ways to do it.
// 1) with the JSON stringify method 
// 2) with the lodash(_) method
  

// with JSON stringify method

let obj1 = {name:"person 1",age:5} 
let obj2 = {age:5,name:"person 1"}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));                          //false


// with the lodash method 
const _ = require('lodash') //initiating lodash
console.log(_.isEqual(obj1,obj2))                                                 //true
