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
    parentitem.innerHTML = parentitem.innerHTML + `<li>${userDetail.currentName} - ${userDetail.currentEmail} - ${userDetail.currentPhoneNumber}</li>`
}





