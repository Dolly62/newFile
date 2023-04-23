var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

//add item
function addItem(e) {
    e.preventDefault();

    //get Input Value
    const newItem = document.getElementById('item').value;

    //get input description value
    const description = document.getElementById('description').value;

    // create new li element
    const li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + description));

    //create delete button element
    const deletebtn = document.createElement('button');

    //add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deletebtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deletebtn);

    //append li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
//filter event
filter.addEventListener('keyup', filterItems);

//filter items
function filterItems(e) {
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        const descriptionNode = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || descriptionNode.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}
