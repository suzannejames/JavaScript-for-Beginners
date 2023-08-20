//most common types: syntax errors, type errors, reference errors
 /*
 try
 {
    throw new Error(); // forcing an error to be thrown from try block to catch block
 }
 catch(err)
 {
    console.log(err)
 }

*/

// console.log(a+b)
// console.log("This line is never reached") - reference error

//throw new ReferenceError(); //produces reference error

try{
    console.log(a+b) // or throw new ReferenceError() will give the same output
}
catch(err)
{
    console.log("There was an error")
}
console.log("My program doesn't stop")

//try catch will not stop program execution even if error is produced

//try catch
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")