function saveUserInput(event) {
  event.preventDefault();
  const currentName =document.getElementById('name').value;
  const currentEmail = document.getElementById('email').value;
  const userDetail = {
      currentName,
      currentEmail
  }

  // AXIOS
  axios.post("https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData", userDetail)
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
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj)

  for(var i=0; i<localStoragekeys.length; i++){
      const key = localStoragekeys[i]
      const userDetailsString = localStorageObj[key];
      const userDetailObj = JSON.parse(userDetailsString);
      showUserOnScreen(userDetailObj)
  }
  axios.get("https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData")
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
  childItem.textContent = userDetail.currentName + ' - ' + userDetail.currentEmail;
  
  
  const deleteButton = document.createElement('input')
  deleteButton.type = 'button'
  deleteButton.value = 'Delete'

  deleteButton.onclick = (_id) => {
    axios.delete(`https://crudcrud.com/api/96ca1b812868473685a2512e83676770/${_id}`)
    .then((response) => {
      parentitem.removeChild(childItem);
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
    localStorage.removeItem(userDetail.currentEmail);
  }


  // deleteButton.onclick = () => {
  //     localStorage.removeItem(userDetail.currentEmail);
  //     parentitem.removeChild(childItem);
  // }
  
  
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
