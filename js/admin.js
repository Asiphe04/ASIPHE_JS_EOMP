// Function to add a new product
function addProduct() {
    // Get the input values from the admin page
    const id = document.getElementById("inputId").value;
    const img = document.getElementById("inputImg").value;
    const itemName = document.getElementById("inputItemName").value;
    const desc = document.getElementById("inputDesc").value;
    const price = document.getElementById("inputPrice").value;
    const category = document.getElementById("inputCategory").value;
    const quantity = document.getElementById("inputQuantity").value;
  
    // Create a new product object
    const newProduct = {
      id: parseInt(id),
      img: img,
      itemName: itemName,
      desc: desc,
      price: parseFloat(price),
      category: category,
      quantity: parseInt(quantity),
    };
  
    // Add the new product to the products array
    products.push(newProduct);
  
    // Render the updated list of products
    renderProducts();
  
    // Clear the input fields
    document.getElementById("inputId").value = "";
    document.getElementById("inputImg").value = "";
    document.getElementById("inputItemName").value = "";
    document.getElementById("inputDesc").value = "";
    document.getElementById("inputPrice").value = "";
    document.getElementById("inputCategory").value = "";
    document.getElementById("inputQuantity").value = "";
  }
  
  // Function to edit a product
  function editProduct(id) {
    // Find the product in the products array
    const product = products.find((product) => product.id === id);
  
    // Set the input fields with the product's current values
    document.getElementById("editId").value = product.id;
    document.getElementById("editImg").value = product.img;
    document.getElementById("editItemName").value = product.itemName;
    document.getElementById("editDesc").value = product.desc;
    document.getElementById("editPrice").value = product.price;
    document.getElementById("editCategory").value = product.category;
    document.getElementById("editQuantity").value = product.quantity;
  
    // Show the edit modal
   
    showModal("editModal");
  }
  
  // Function to save the edited product
  function saveProduct() {
    // Get the input values from the edit modal
    const id = document.getElementById("editId").value;
    const img = document.getElementById("editImg").value;
    const itemName = document.getElementById("editItemName").value;
    const desc = document.getElementById("editDesc").value;
    const price = document.getElementById("editPrice").value;
    const category = document.getElementById("editCategory").value;
    const quantity = document.getElementById("editQuantity").value;
  
    // Find the product in the products array
    const product = products.find((product) => product.id === parseInt(id));
  
    // Update the product with the new values
    product.img = img;
    product.itemName = itemName;
    product.desc = desc;
    product.price = parseFloat(price);
    product.category = category;
    product.quantity = parseInt(quantity);
  
    // Render the updated list of products
    renderProducts();
  
    // Hide the edit modal
    hideModal("editModal");
  }
  
  // Function to delete a product
  function deleteProduct(id) {
    // Filter out the product with the given id from the products array
    products = products.filter((product) => product.id !== id);
  
    // Render the updated list of products
    renderProducts();
  }
  
  // Render the products on the admin page
  function renderProducts() {
    // Get the container element to display the products
    const container = document.getElementById("productContainer");
  
    // Clear the container
    container.innerHTML = "";
  
    // Loop through the products array and create HTML elements for each product
    products.forEach((product) => {
      // Create a product card element
      const card = document.createElement("div");
      card.classList.add("product-card");
  
      // Create HTML elements for the product details
      const idElement = document.createElement("span");
      idElement.textContent = "ID: " + product.id;
  
      const imgElement = document.createElement("img");
      imgElement.src = product.img;
  
      const itemNameElement = document.createElement("h3");
      itemNameElement.textContent = product.itemName;
  
      const descElement = document.createElement("p");
      descElement.textContent = product.desc;
  
      const priceElement = document.createElement("p");
      priceElement.textContent = "Price: R" + product.price;
  
      const categoryElement = document.createElement("p");
      categoryElement.textContent = "Category: " + product.category;
  
      const quantityElement = document.createElement("p");
      quantityElement.textContent = "Quantity: " + product.quantity;
  
      // Create edit and delete buttons for the product
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editProduct(product.id));
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteProduct(product.id));
  
      // Append all the elements to the product card
      card.appendChild(idElement);
      card.appendChild(imgElement);
      card.appendChild(itemNameElement);
      card.appendChild(descElement);
      card.appendChild(priceElement);
      card.appendChild(categoryElement);
      card.appendChild(quantityElement);
      card.appendChild(editButton);
      card.appendChild(deleteButton);
  
      // Append the product card to the container
      container.appendChild(card);
    });
  }
  
  // Call the renderProducts function to display the initial list of products
  renderProducts();
  
  