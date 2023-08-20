//user triggered events eg: click, touch,button click
//JavaScript, the function that handles captured events is known as the event handler.

//Two methods to set up an event listener for html elements on a web page

//if i want to listen to click event on body element

const target=document.querySelector('body')
function handleClick()
{
    console.log('Clicked the body')
}
target.addEventListener('click',handleClick)
//text will be output to the console

function handleClick2()
{
    console.log('clicked the body')
}
//in html place onclick="handleclick2" inside heading tag

