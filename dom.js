// 
/* var header = document.getElementById('main-header');
header.style.border = 'solid  3px #000';

var items = document.querySelector('.title');
console.log(items);
items.textContent = 'ADD ITEMS';
items.style.fontWeight = 'bold';
items.style.color = 'green'; */

var items = document.getElementsByClassName('list-group-item');

// 3rd element with green background
items[3].style.backgroundColor = 'green';

// all elements are bold
for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}
