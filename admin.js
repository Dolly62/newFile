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
      "https://crudcrud.com/api/3e32823787f243d492c1986df202f0cc/AdminPage",
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
    .get("https://crudcrud.com/api/3e32823787f243d492c1986df202f0cc/AdminPage")
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);
        showAdminInputOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showAdminInputOnScreen(adminInput) {
  const parentElement = document.getElementById("ListOfProducts");
  const childElement = `<li> ${adminInput.Product_Name} - ${adminInput.Selling_Price}</li>`;

  parentElement.innerHTML = parentElement.innerHTML + childElement;
}

function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}

function toCalculateTotalPrice() {
  var prices = document.getElementById("price");
  var total = 0;

  for (var i = 0; i < prices.length; i++) {
    var Price = prices[i].value;

    if (!isNaN(Price)) {
      total += Price;
    }
  }

  document.getElementById("totalprice").textContent = total;
}
