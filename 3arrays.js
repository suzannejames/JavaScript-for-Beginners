//can store several types of data
var ourArray=["SUZ",23]
var myArray=["Quincy",1];
//we can have nested arrays/multi dimensional arrays called nested arrays
a=[["suz",15],["biya",22]]
console.log(a[0])//prints suz,15
console.log(a[0][1])//prints 15
//arrays are mutable 
//add data to end of array using push()
a.push(["100",15])
console.log(a)
// remove item from array using pop()
console.log(a.pop())
//shift(), removes the first element of the array
console.log(a.shift())
//unshift() adds element to the beginning of the array
a.unshift(["suz",15])
console.log(a) 