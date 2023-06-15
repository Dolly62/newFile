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

    // AXIOS
    axios.post("https://crudcrud.com/api/ab09b501f5b74ffc94f2859c28cdc647/appointmentData", userDetail)
    .then((response) => {
        showUserOnScreen(response.data)
        // console.log(respone)
    })
    .catch((err) => {
        console.log(err)
    })



    //store the user data
    // const userInput = localStorage.setItem('currentName', currentName);
    // const userEmail = localStorage.setItem('currentEmail', currentEmail);
    // const userPhoneNumber = localStorage.setItem('currentPhoneNumber', currentPhoneNumber);
    // localStorage.setItem('userInfo', JSON.stringify(userDetail));
    // showUserOnScreen(userDetail)
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/ab09b501f5b74ffc94f2859c28cdc647/appointmentData")
    .then((response) => {
        console.log(response)
        for(var i=0; i< response.data.length; i++){
            showUserOnScreen(response.data[i])
        }
    })

    .catch((err) => {
        console.log(err)
    })

    // const localStorageObj = localStorage;
    // const localStoragekeys = Object.keys(localStorageObj)

    // for(var i=0; i<localStoragekeys.length; i++){
    //     const key = localStoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailObj = JSON.parse(userDetailsString);
    //     showUserOnScreen(userDetailObj)
    // }
})

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


    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'
    editButton.onclick = () => {
        localStorage.removeItem(userDetail.currentEmail);
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(editButton);
    parentitem.appendChild(childItem);
}








