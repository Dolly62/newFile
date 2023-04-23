

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';


// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// items[1].style.color = 'green';


// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }


// Trasversing DOM

var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.firstElementChild);

//nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);


//previousSibling
// console.log(itemList.previousElementSibling);

//createElement

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add Attr
newDiv.setAttribute('title', 'Hello Div');
//Create text node
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);

//insert in DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1)
