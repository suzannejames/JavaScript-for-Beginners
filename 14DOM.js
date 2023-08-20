// The DOM allows you to change properties of objects on a webpage. You can think of the DOM as a superpower remote for websites. It gives developers power in how they can manipulate and update webpages. The DOM is in the form of a JavaScript object with nested objects for different parts of the page. These objects have nested objects of their own until the entire HTML file is mapped out in what looks like a tree structure. The DOM is the model of the HTML file saved as a JavaScript object in your browser's memory. The browser automatically builds the DOM for every webpage that it downloads. 
//to interact with dom we can use elements tab inside browsers webtools.
//basically the console in inspect option of browser

// Eg for creating h2 element to add to a web page
const h2=document.createElement('h2')
h2.innerText="This is an h2 heading"
h2.setAttribute('id','sub-heading')
//id and a class html attribute
h2.setAttribute('class','secondary')
document.body.appendChild(h2)
//object is appended to the body the webpage and the heading 2 text will display in the browser


//JS selectors

//JavaScript selectors work with the document object which you can access by typing the keyword document. This returns the webpage stored in the browser's memory known as the document object model or DOM.

//to select para text

document.querySelector('p')
document.querySelectorAll('p') //selects all para elements
document.getElementById('heading')
document.getElementsByClassName('txt')
