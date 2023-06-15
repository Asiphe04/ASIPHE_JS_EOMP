// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const addButton = document.getElementById("addButton");
  const modal = document.getElementById("editModal");
  const modalId = document.getElementById("editId");
  const modalItemName = document.getElementById("editItemName");
  const modalImg = document.getElementById("editImg");
  const modalPrice = document.getElementById("editPrice");
  const modalCategory = document.getElementById("editCategory");
  const modalDesc = document.getElementById("editDesc");
  const modalQuantity = document.getElementById("editQuantity");
  const saveButton = document.getElementById("saveButton");

  // Retrieve the products from local storage or initialize an empty array
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let editIndex = null; // Keep track of the index of the product being edited

  // Function to render the product list
  function renderProductList() {
    // Clear the previous list
    productList.innerHTML = "";

    // Render each product as a list item
    products.forEach((product, index) => {
      const listItem = document.createElement("tr");
      listItem.innerHTML = `
        <td>${product.id}</td>
        <td>${product.itemName}</td>
        <td><img src="${product.img}" class="w-25"></td>
        <td>R${product.price}</td>
        <td>${product.category}</td>
        <td>${product.desc}</td>
        <td>${product.quantity}</td>
        <td>
          <button class="editButton" data-index="${index}">Edit</button>
          <button class="deleteButton" data-index="${index}">Delete</button>
        </td>
      `;
      productList.appendChild(listItem);
    });

    // Attach event listeners to delete and edit buttons
    const deleteButtons = document.getElementsByClassName("deleteButton");
    Array.from(deleteButtons).forEach((button) => {
      button.addEventListener("click", handleDelete);
    });

    const editButtons = document.getElementsByClassName("editButton");
    Array.from(editButtons).forEach((button) => {
      button.addEventListener("click", handleEdit);
    });
  }

  // Function to handle the add button click
  function handleAdd() {
    // Retrieve input values
    const id = document.getElementById("id").value;
    const itemName = document.getElementById("itemName").value;
    const img = document.getElementById("img").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;
    const quantity = document.getElementById("quantity").value;

    if (id && itemName && img && price && category && desc && quantity) {
      const product = {
        id,
        itemName,
        img,
        price,
        category,
        desc,
        quantity,
      };

      // Add the product to the list
      products.push(product);

      // Clear input fields
      document.getElementById("id").value = "";
      document.getElementById("itemName").value = "";
      document.getElementById("img").value = "";
      document.getElementById("price").value = "";
      document.getElementById("category").value = "";
      document.getElementById("desc").value = "";
      document.getElementById("quantity").value = "";

      // Update the product list
      renderProductList();

      // Store the updated products in local storage
      localStorage.setItem("products", JSON.stringify(products));
    }
  }

  // Function to handle the delete button click
  function handleDelete(event) {
    const index = event.target.dataset.index;

    // Remove the product from the list
    products.splice(index, 1);

    // Update the product list
    renderProductList();

    // Store the updated products in local storage
    localStorage.setItem("products", JSON.stringify(products));
  }

  // Function to handle the edit button click
  function handleEdit(event) {
    const index = event.target.dataset.index;

    // Retrieve the product at the specified index
    const product = products[index];

    // Set the input fields in the modal with the product values
    modalId.value = product.id;
    modalItemName.value = product.itemName;
    modalImg.value = product.img;
    modalPrice.value = product.price;
    modalCategory.value = product.category;
    modalDesc.value = product.desc;
    modalQuantity.value = product.quantity;

    // Save the index of the product being edited
    editIndex = index;

    // Open the modal
    modal.style.display = "block";
  }

  // Function to handle the save button click in the modal
  function handleSave() {
    // Retrieve updated input values from the modal
    const id = modalId.value;
    const itemName = modalItemName.value;
    const img = modalImg.value;
    const price = modalPrice.value;
    const category = modalCategory.value;
    const desc = modalDesc.value;
    const quantity = modalQuantity.value;

    if (id && itemName && img && price && category && desc && quantity) {
      const product = {
        id,
        itemName,
        img,
        price,
        category,
        desc,
        quantity,
      };

      // Update the product at the specified index
      products[editIndex] = product;

      // Close the modal
      modal.style.display = "none";

      // Update the product list
      renderProductList();

      // Store the updated products in local storage
      localStorage.setItem("products", JSON.stringify(products));
    }
  }

  // Attach event listeners to the add and save buttons
  addButton.addEventListener("click", handleAdd);
  saveButton.addEventListener("click", handleSave);

  // Initial rendering of the product list
  renderProductList();
});
// Get the modal and button elements
let modal = document.getElementById("addModal");
let addButton = document.getElementById("addShowModal");

// Add a click event listener to the button
addButton.addEventListener("click", function () {
  // Display the modal by adding the "show" class
  modal.style.display = "block";
});
