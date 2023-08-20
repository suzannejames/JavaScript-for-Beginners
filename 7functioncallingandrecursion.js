/*
function myDay() {
    console.log('3');
    console.log('2');
    console.log('1');
    myDay();
}
// this will cause the function to run in infinite loop
*/
let counter=3
function myDay()
{
    console.log(counter)
    counter-=1
    if(counter==0)
    return
    myDay()
}
myDay() 