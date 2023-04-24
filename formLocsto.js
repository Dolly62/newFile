function saveUserInput(event) {
    event.preventDefault();
    const currentName =document.getElementById('username').value;
    const currentEmail = document.getElementById('e-mail').value;
    const currentPhoneNumber =document.getElementById('phone-number').value;
    const userDetail = {
        currentName,
        currentEmail,
        currentPhoneNumber

    }

    //store the user data
    // const userInput = localStorage.setItem('currentName', currentName);
    // const userEmail = localStorage.setItem('currentEmail', currentEmail);
    // const userPhoneNumber = localStorage.setItem('currentPhoneNumber', currentPhoneNumber);
    localStorage.setItem('userInfo', JSON.stringify(userDetail));
    showUserOnScreen(userDetail)
}

function showUserOnScreen(userDetail) {
    const parentitem = document.getElementById('listOfItems');
    const childItem = document.createElement('li');
    childItem.textContent = userDetail.currentName + ' - ' + userDetail.currentEmail + ' - ' + userDetail.currentPhoneNumber;

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.onclick = () => {
        localStorage.removeItem(userDetail.currentEmail);
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(deleteButton);
    parentitem.appendChild(childItem);
}








