function saveUserInput(event) {
  event.preventDefault();
  const currentName = document.getElementById("name").value;
  const currentEmail = document.getElementById("email").value;
  const userDetail = {
    currentName,
    currentEmail,
  };

  // AXIOS
  axios
    .post(
      "https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData",
      userDetail
    )
    .then((response) => {
      showUserOnScreen(response.data);
      // console.log(respone)
    })
    .catch((err) => {
      console.log(err);
    });

  //store the user data
  // const userInput = localStorage.setItem('currentName', currentName);
  // const userEmail = localStorage.setItem('currentEmail', currentEmail);
  // const userPhoneNumber = localStorage.setItem('currentPhoneNumber', currentPhoneNumber);
  // localStorage.setItem('userInfo', JSON.stringify(userDetail));
  // showUserOnScreen(userDetail)
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localStoragekeys.length; i++) {
    const key = localStoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailObj = JSON.parse(userDetailsString);
    showUserOnScreen(userDetailObj);
  }
  axios
    .get(
      "https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData"
    )
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
    })

    .catch((err) => {
      console.log(err);
    });

  // const localStorageObj = localStorage;
  // const localStoragekeys = Object.keys(localStorageObj)

  // for(var i=0; i<localStoragekeys.length; i++){
  //     const key = localStoragekeys[i]
  //     const userDetailsString = localStorageObj[key];
  //     const userDetailObj = JSON.parse(userDetailsString);
  //     showUserOnScreen(userDetailObj)
  // }
});

function showUserOnScreen(userDetail) {
  const parentitem = document.getElementById("listOfItems");
  const childItem = `<li id=${userDetail._id}> ${userDetail.currentName} - ${userDetail.currentEmail} 
  <button class="btn btn-danger" onclick=deleteUser('${userDetail._id}')> Delete </button> 
  <button class="btn btn-success" onclick=editUserDetails('${userDetail.currentEmail}','${userDetail.currentName}','${userDetail._id}')> Edit </button>
  </li>`;
  parentitem.innerHTML = parentitem.innerHTML + childItem;
}

function editUserDetails(emailid, name, userId) {
  document.getElementById('email').value = emailid;
  document.getElementById('name').value = name;

  axios
    .put(
      `https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData/${userId}`
    )
    .then((response) => {
      showUserOnScreen(response.data);
    })
    .then((err) => {
      console.log(err);
    });

  deleteUser(userId);
}

function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/96ca1b812868473685a2512e83676770/appointmentData/${userId}`
    )
    .then((response) => {
      removeUserFromScreen(userId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserFromScreen(userId) {
  const parentitem = document.getElementById("listOfItems");
  const childItemToBeDeleted = document.getElementById(userId);
  if (childItemToBeDeleted) {
    parentitem.removeChild(childItemToBeDeleted);
  }
}
