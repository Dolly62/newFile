function saveUserInput(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;

  const UserInput = {
    name,
    description,
    price,
    category,
    quantity,
  };



  axios
  .post("https://crudcrud.com/api/f1b4673e5d5f4f57ada26b4919fe36b5/IntegratingRestAPI", UserInput)
  .then((response) => {
      showUserInputOnScreen(response.data);
  })
  .catch((err) => {
    console.log(err);
  })

//   if("Electronics"){
//     document.getElementById("currentQuantity").value = 50;
//   }
//   else{
//     document.getElementById("currentQuantity").value = 100;
//   }

}

window.addEventListener("DOMContentLoaded", () => {
//   const localStorageObj = localStorage;
//   const localStorageKeys = Object.keys(localStorageObj);

//   for (var i = 0; i < localStorageKeys.length; i++) {
//     const key = localStorageKeys[i];
//     const userDetails = localStorageObj[key];
//     const userDetailObj = JSON.parse(userDetails);
//     showUserInputOnScreen(userDetailObj);
//   }

  axios
  .get("https://crudcrud.com/api/f1b4673e5d5f4f57ada26b4919fe36b5/IntegratingRestAPI")
  .then((response) => {
    console.log(response);
    for(var i = 0; i < response.data.length; i++){
        showUserInputOnScreen(response.data[i]);
    }
  })
  .catch((err) => {
    console.log(err);
  })
});

function showUserInputOnScreen(UserInput) {
  const parentElement = document.getElementById("ListOfItems");
  const childElement = `<li> ${UserInput.name} - ${UserInput.description} - ${UserInput.price} - ${UserInput.quantity}
    </li>`;

  parentElement.innerHTML = parentElement.innerHTML + childElement;
}
