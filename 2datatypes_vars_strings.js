/* 7 data types
1. undefined
2. null
3. boolean
4. string
5. symbol
6. number
7. object
*/
var myname ="suzanne"//var used to declare variable, is global
console.log(myname)
// alternative for var
let ourName="codecamp"//only used within scope of declaration
const pi=3.14//unmutable
//semi colon not required but recommended

//CONCATENATION
var a="hi i am suzanne."
var b="hello i am her"
console.log(a+" "+b); // or a+b
// or
var ourstr="hey there,"
ourstr+="i am suz"
console.log(ourstr)


// CONCATENATION WITH concat()
var a="hello",b="there!"
console.log(a.concat(b))

//LENGTH OF A STRING
var firstNameLength=0;
var firstName="SUZANNE"
firstNameLength=firstName.length;
console.log(firstNameLength)
console.log(firstName[0])
// strings are immutable, they cannot be altered once created.


