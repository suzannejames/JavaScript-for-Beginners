//D structuring something out of an object or array, in this case your project folder is like copying that item from your folder on to another location. The original item still exists in your project folder. I just made a copy of the original item but this copy is completely independent of the original item.
let {PI}=Math;
console.log(PI)
console.log(PI===Math.PI)
PI=1
console.log(PI===Math.PI)

//For Of loops
const colors = ['red','orange','yellow']
var i
for (i of colors)//or var i of colors
 {
    console.log(i);
}
//built-in methods
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));
console.log(Object.entries(car2));

//Template literals - dont have to worry about limitations of using '' or ""
let multiline= `
hello
there` //backticks, button below esc, if u use quotes -> error
console.log(multiline)

//Combining Template Literals with Variable Interpolation

let f=`"Hello",he said`
let g=`Bye bye`
console.log(`${f} - and I got curious. ${g}`)