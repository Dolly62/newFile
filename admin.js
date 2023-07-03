function saveInput(event) {
  event.preventDefault();

  const productName = document.getElementById("name").value;
  const sellingPrice = document.getElementById("price").value;

  const adminInput = {
    Product_Name: productName,
    Selling_Price: sellingPrice,
  };

  axios
    .post(
      "https://crudcrud.com/api/b53fb518f0144bf0950211b4160545b3/AdminPage",
      adminInput
    )
    .then((response) => {
      showAdminInputOnScreen(response.data);
      toCalculateTotalPrice();
      clearFormFields();
      //   console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/b53fb518f0144bf0950211b4160545b3/AdminPage")
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);
        showAdminInputOnScreen(response.data[i]);
        toCalculateTotalPrice();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showAdminInputOnScreen(adminInput) {
  const parentElement = document.getElementById("ListOfProducts");
  const childElement = `<li id= ${adminInput._id}> ${adminInput.Product_Name} - <span class="price">${adminInput.Selling_Price}</span>
  <button class="btn btn-danger" onclick=deleteUser('${adminInput._id}')>Delete</button>
  </li>`;

  parentElement.innerHTML = parentElement.innerHTML + childElement;
}

function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/b53fb518f0144bf0950211b4160545b3/AdminPage/${userId}`
    )
    .then((response) => {
      removeUserFromScreen(userId);
    })
    .catch((err) => {
      console.log(err);
    });
}


//To Remove User From the Screen
function removeUserFromScreen(userId) {
  const parentItem = document.getElementById("ListOfProducts");
  const childItemToBeDeleted = document.getElementById(userId);
  if (childItemToBeDeleted) {
    parentItem.removeChild(childItemToBeDeleted);
    const priceElement = product.querySelector(".price");
    const price = parseFloat(priceElement.textContent);

    totalPrice -= price;

    document.getElementById("totalprice").textContent = `$${totalPrice}`;
  }
}


//To Clear the Form fields
function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}

//To Calculate Total Price
function toCalculateTotalPrice() {
  const productItem = document.querySelectorAll("#ListOfProducts li");
  let totalPrice = 0;

  productItem.forEach((product) => {
    const priceElement = product.querySelector(".price");
    const price = parseFloat(priceElement.textContent);

    totalPrice += price;
  });

  document.getElementById("totalprice").textContent = `$${totalPrice}`;
}
