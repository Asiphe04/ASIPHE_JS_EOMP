// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const addButton = document.getElementById("addButton");
  const sortButton = document.getElementById("sortButton");

  // Retrieve the products from local storage or initialize an empty array
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Function to render the product list
  function renderProductList() {
    // Clear the previous list
    productList.innerHTML = "";

    // Render each product as a list item
    products.forEach((product, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${product.id}</span>
        <span>${product.name}</span>
        <button class="deleteButton" data-index="${index}">Delete</button>
      `;
      productList.appendChild(listItem);
    });

    // Attach event listener to delete buttons
    const deleteButtons = document.getElementsByClassName("deleteButton");
    Array.from(deleteButtons).forEach((button) => {
      button.addEventListener("click", handleDelete);
    });
  }

  // Function to handle the add button click
  function handleAdd() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("itemName").value;

    if (id && name) {
      const product = {
        id,
        name,
      };

      // Add the product to the list
      products.push(product);

      // Clear input fields
      document.getElementById("id").value = "";
      document.getElementById("itemName").value = "";

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

  // Function to handle the sort button click
  function handleSort() {
    // Sort the products by ID in ascending order
    products.sort((a, b) => a.id.localeCompare(b.id));

    // Update the product list
    renderProductList();

    // Store the updated products in local storage
    localStorage.setItem("products", JSON.stringify(products));
  }

  // Attach event listeners to the add and sort buttons
  addButton.addEventListener("click", handleAdd);
  sortButton.addEventListener("click", handleSort);

  // Initial rendering of the product list
  renderProductList();
});
