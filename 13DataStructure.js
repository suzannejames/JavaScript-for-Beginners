//data structure is a way to organize data
//Objects, Arrays, Maps and Sets are the data structures in JS

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
//or
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});
//map is similar to an array but it consists of key-value pairs
//Set - unique items

//Spread Operator -> ...
//It is the shortest and simplest method to copy the properties of an object onto a newly created object.
let top3=["one","two","three"]
function showthis(p1,p2,p3){
    console.log("visit"+p1)
    console.log("then visit"+p2)
    console.log("finally visit"+p3)
}
showthis(top3[0],top3[1],top3[2])
showthis(...top3[7])

//rest operator-> The rest operator, is used to build a smaller box, and pack items into it
const top2=["Goa","Kerala"]
const []= top2 //destructuring from here
const [first, ...visitrest]=top2
//first will contain Goa, visitrest will contain rest of the places
