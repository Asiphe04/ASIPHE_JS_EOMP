// linking my buttons, input and list
const productInput = document.getElementById("input");
const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
const productList = document.getElementById("product-list");

addButton.addEventListener("click", addProduct);
sortButton.addEventListener("click", sortProducts);
document.addEventListener("DOMContentLoaded", loadProducts);

// function to add product
function addProduct() {
  const product = productInput.value.trim();
  if (product === "") {
    alert("product name cannot be empty.");
    return;
  }

  if (product.length < 3) {
    alert("product name must have more than three characters.");
    return;
  }
  if (product.charAt(0) === product.charAt(0).toLowerCase()) {
    alert("The first character should be in uppercase!");
    return;
  }

  const listItem = createProductListItem(product);
  productList.appendChild(listItem);

  saveProducts();

  productInput.value = "";
}

// function to create task
function createProductListItem(product) {
  const listItem = document.createElement("li");

  const checklistButton = document.createElement("span");
  checklistButton.innerHTML = "&#x2713;";

  checklistButton.classList.add("checklist-icon");
  checklistButton.addEventListener("click", toggleChecklist);
  listItem.appendChild(checklistButton);

  const taskText = document.createElement("span");
  taskText.textContent = product;
  taskText.classList.add("task-text");
  listItem.appendChild(taskText);

  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = "&#x1F5D1;";
  deleteButton.classList.add("delete-icon");
  deleteButton.addEventListener("click", deleteProduct);
  listItem.appendChild(deleteButton);

  return listItem;
}
// funcion to delete task
function deleteProduct(event) {
  const listItem = event.target.parentElement;
  productList.removeChild(listItem);
  saveProducts();
}

function toggleChecklist(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle("checked");
  listItem.style.textDecoration = "line-through";

  saveProducts();
}

// Function to save products

function saveProducts() {
  const products = Array.from(productList.children).map((item) => {
    return {
      text: item.firstChild.textContent,
      checked: item.classList.contains("checked"),
    };
  });
  localStorage.setItem("products", JSON.stringify(products));
}

// Function to load products
function loadProducts() {
  const savedProducts = localStorage.getItem("products");
  if (!saveProducts) {
    return;
  }
  const products = JSON.parse(savedProducts);
  products.forEach((product) => {
    const listItem = task.text;
    if (product.checked) {
      listItem.classList.add("checked");
    }
    productList.appendChild(listItem);
  });
}

// function to sort tasks
function sortProducts() {
  let list, i, switching, b, shouldSwitch;
  list = document.querySelector("ul");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
