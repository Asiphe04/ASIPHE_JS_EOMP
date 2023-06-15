const cartEl = document.querySelector(".nav_bag");
const cartContainer = document.querySelector(".cart_container");
const closeCart = document.querySelector("#close_icon");
const productsContainerEl = document.querySelector(".products_container");
const cartProductEl = document.querySelector(".cart_products");
const totalPriceEl = document.querySelector(".totalPrice");
const cartItemsEl = document.querySelector(".items");
const btnClear = document.querySelector(".btn_clear");
cartEl.addEventListener("click", () => {
  cartContainer.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active");
});

let products = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [
      {
        id: 1,
        img: "https://i.postimg.cc/m210H58y/adidas-ucl-trainig-removebg-preview.png",
        itemName: "UCL ball",
        desc: "Adidas UCL training ball for the 22/23 season",
        price: 799.99,
        category: "Ball",
        quantity: 22,
      },
      {
        id: 2,
        img: "https://i.postimg.cc/T1FFsVYb/molten-uel-removebg-preview.png",
        itemName: "Moldel UEL ball",
        desc: "Moldel UEL match ball for the 22/23 season",
        price: 499.99,
        category: "Ball",
        quantity: 22,
      },
      {
        id: 3,
        img: "https://i.postimg.cc/DwLktMGw/ucol-ball-removebg-preview.png",
        itemName: "Moldel Uefa Conference ball",
        desc: "Moldel Uefa conference ball for the 22/23 season",
        price: 299.99,
        category: "Ball",
        quantity: 22,
      },
      {
        id: 4,
        img: "https://i.postimg.cc/sfNk1r92/epl-ball-removebg-preview.png",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the Premier League",
        price: 450.99,
        category: "Ball",
        quantity: 22,
      },

      {
        id: 6,
        img: "https://i.postimg.cc/NMNW6h3p/laliga-ball-removebg-preview.png",
        itemName: "LaLiga Match Ball",
        desc: "The 22/23 season match ball of LaLiga",
        price: 350.99,
        category: "Ball",
        quantity: 22,
      },
      {
        id: 7,
        img: "https://i.postimg.cc/C5JWwDgD/ucl-removebg-preview.png",
        itemName: "UCL",
        desc: "The most valuable club trophy , even 99% of football players would say so.",
        price: 4499.99,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 8,
        img: "https://i.postimg.cc/02WL3pZ1/epl-removebg-preview.png",
        itemName: "EPL",
        desc: "The best league in the world, the most watched league in the world.",
        price: 4500.88,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 9,
        img: "https://i.postimg.cc/rm1BY3Zf/uel-removebg-preview.png",
        itemName: "UEL",
        desc: "The trophy that belongs to Sevilla, as they have won it more than 5 times - so you would say they are the Real Madri of Europa",
        price: 2799.99,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 10,
        img: "https://i.postimg.cc/nVk8K8Dz/conference-removebg-preview.png",
        itemName: "Uefa Conference League",
        desc: "Trophy was previously won by one of the greatest managers of all time - Jose Mourinho",
        price: 1999.99,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 11,
        img: "https://i.postimg.cc/90c63bvC/psl-removebg-preview.png",
        itemName: "PSL",
        desc: "The most competitive league in Africa, well not anymore because Sundowns has won it more than 5 times in a row",
        price: 2300.89,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 12,
        img: "https://i.postimg.cc/022TctYC/laliga-removebg-preview.png",
        itemName: "La Liga",
        desc: "The most valuable club trophy , even 99% of football players would say so.",
        price: 3500.99,
        category: "Trophies",
        quantity: 22,
      },
      {
        id: 13,
        img: "https://i.postimg.cc/pVczYHsH/adidas-removebg-preview.png",
        itemName: "Adidas boots",
        desc: "The most valuable club trophy , even 99% of football players would say so.",
        price: 4500.99,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 14,
        img: "https://i.postimg.cc/PrLZSR78/puma-removebg-preview.png",
        itemName: "Puma Boots",
        desc: "Innovative soccer boots by Puma, blending advanced technology, sleek design, and performance-enhancing features to elevate players' game to new heights.",
        price: 4000.91,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 15,
        img: "https://i.postimg.cc/LXq09TXY/suntec-removebg-preview.png",
        itemName: "Suntec Boots",
        desc: "Suntec soccer boots: Uniting style and functionality, Suntec presents a fresh approach to the game, combining comfort, precision, and eye-catching design for players who dare to stand out on the field.",

        price: 1000.99,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 16,
        img: "https://i.postimg.cc/DzMWHRhM/nike-removebg-preview.png",
        itemName: "Nike Boots",
        desc: "Cutting-edge soccer boots designed for optimal performance, style, and durability, empowering players to dominate the game.",
        price: 4999.99,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 17,
        img: "https://i.postimg.cc/Y0Ss04Z9/lotto-removebg-preview.png",
        itemName: "Lotto Boots",
        desc: "Lotto soccer boots: Crafted with meticulous attention to detail, Lotto delivers reliable performance and unmatched comfort, allowing players to unleash their skills with confidence and finesse on the soccer pitch.",

        price: 2100.99,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 18,
        img: "https://i.postimg.cc/s2Yz9NMZ/u-removebg-preview.png",
        itemName: "Umbro Boots",
        desc: "Umbro soccer boots: Embodying a rich heritage in the sport, Umbro's soccer boots merge timeless craftsmanship with modern technology, providing players with superior control, agility, and a touch of classic elegance, making every moment on the field truly iconic.",
        price: 3000.87,
        category: "Boots",
        quantity: 22,
      },
      {
        id: 19,
        img: "https://i.postimg.cc/2SWmt66g/bvb-removebg-preview.png",
        itemName: "BVB Home",
        desc: "Dortmund will never dissapoint with their kits",
        price: 999.99,
        category: "tShirts",
        quantity: 22,
      },
      {
        id: 20,
        img: "https://i.postimg.cc/TPXGv651/arsenal-removebg-preview.png",
        itemName: "Arsenal Home",
        desc: "The kit of the best football club in the world",
        price: 1599.99,
        category: "tShirts",
        quantity: 22,
      },

      {
        id: 21,
        img: "https://i.postimg.cc/C56Y3nbp/liverpool-removebg-preview.png",
        itemName: "Liverpool Home",
        desc: "Liverpool home kit features the iconic red color and incorporates elements of tradition and modern design.",
        price: 1499.99,
        category: "tShirts",
        quantity: 22,
      },
      {
        id: 22,
        img: "https://i.postimg.cc/yd1HWyPz/barcelona-removebg-preview.png",
        itemName: "FC Barcelona Home",
        desc: "Barcelona home kit showcases the club's traditional blue and red colors, embodying their rich history and distinctive Catalan identity.",
        price: 1500.99,
        category: "tShirts",
        quantity: 22,
      },
      {
        id: 23,
        img: "https://i.postimg.cc/65yBdzNW/chelsea-removebg-preview.png",
        itemName: "Chelsea Home",
        desc: "Chelsea  home kit is predominantly blue, representing the club's identity, and often features accents of white and red, combining tradition and modern aesthetics.",

        price: 999.99,
        category: "tShirts",
        quantity: 22,
      },

      {
        id: 24,
        img: "https://i.postimg.cc/wv29kGvv/mancity-removebg-preview.png",
        itemName: "Man City Home",
        desc: "Manchester City home kit typically features sky blue as the primary color, symbolizing the club's heritage, with modern design elements that represent their contemporary success and style.",
        price: 1099.95,
        category: "tShirts",
        quantity: 22,
      },
    ];
function renderProducts() {
  productsContainerEl.innerHTML = "";
  products.forEach((product) => {
    const { id, itemName, desc, img, price, category } = product;
    const productEl = document.createElement("div");
    productEl.classList.add("top-picks-items");
    productEl.classList.add("col-3");
    productEl.classList.add("container");
    productEl.classList.add("add");
    productEl.classList.add(`${category}`);
    productEl.innerHTML = `
        <div class="img-container">
            <img src="${img}" alt="${itemName}" class="top-picks-img">
            
        </div>
        <p>${itemName}<br>R${price}</p>
        <button class="btn-add-to-cart btn" onClick="addToCart(${id})">Add to Cart</button>
        <button class="btn-see-more btn" onclick="openPopup('popup${id}')">See more</button>
        <div id="popup${id}" class="popup">
        <div class="popup-content">
          <span class="close" onclick="closePopup('popup${id}')">&times;</span>
          <h2>${itemName}</h2>
          <p>${desc}</p>
          <button class="btn-add-to-cart btn" onClick="addToCart(${id})">Add to Cart</button> 
       
        </div>
    
    </div>
        `;

    productsContainerEl.appendChild(productEl);
  });
  localStorage.setItem("products", JSON.stringify(products));
}
renderProducts();

// get items from localStorage
let cart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
updateCart();
function renderCartProducts() {
  cartProductEl.innerHTML = "";
  cart.forEach((product) => {
    const { id, itemName, img, price, numberOfUnits } = product;
    const cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
      <div class="cartProduct">
        <div class="cart_product_flex">
          <div class="cart_product_img">
            <img src="${img}" alt="${itemName}" class="cart_img">
          </div>
          <div class="cart_product_title">
            <p>${itemName}</p>
          </div>
        </div>
        <div class="cart_product_price">
          <p>Price: R${price}</p>
        </div>
        <div class="cart_amount">
          <p class="decrement" onclick="changeNumberOfUnits('minus', ${id})">-</p>
          <div class="number">${numberOfUnits}</div>
          <p class="increment" onclick="changeNumberOfUnits('plus', ${id})">+</p>
        </div>
        <div class="cart_product_btn">
          <p onClick="removeFromCart(${id})"><i class='bx bxs-trash-alt'></i></p>
        </div>
      </div>
    `;

    cartProductEl.appendChild(cartProduct);
  });
}

renderCartProducts();

// add to cart functionality

function addToCart(id) {
  const product = products.find((product) => product.id === id);
  cart.push({
    ...product,
    numberOfUnits: 1,
  });

  updateCart();
}

// remove from cart functionality

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// updating our cart

function updateCart() {
  renderCartTotal();
  renderCartProducts();
  localStorage.setItem("cartItems", JSON.stringify(cart));
}
updateCart();

// change amount

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

changeNumberOfUnits();

// cart total price

function renderCartTotal() {
  let totalCartPrice = 0;
  totalCartAmount = 0;

  cart.forEach((item) => {
    totalCartPrice += item.price * item.numberOfUnits;
  });

  totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
}

// clear cart

btnClear.addEventListener("click", () => {
  clearCart();
});
function clearCart() {
  if (cart.length >= 1) {
    if (confirm("Do you want to clear the cart")) {
      cart = [];
      localStorage.setItem("cartItems", JSON.stringify(cart));
      updateCart();
    }
  }
}

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}
//FILTER
const allFilterItems = document.querySelectorAll(".top-picks-items");
const allFilterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  allFilterBtns[0].classList.add("active-btn");
});

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  const filterValue = btn.dataset.filter;

  allFilterItems.forEach((item) => {
    if (filterValue === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(filterValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  resetActiveBtn();
  btn.classList.add("active-btn");
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

// SORT

window.addEventListener("DOMContentLoaded", () => {
  allFilterBtns[0].classList.add("active-btn");
});

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  const filterValue = btn.dataset.filter;

  allFilterItems.forEach((item) => {
    if (filterValue === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(filterValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  resetActiveBtn();
  btn.classList.add("active-btn");

  // Trigger sorting after filtering
  const sortValue = sortSelect.value;
  sortItems(sortValue);
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

function sortItems(sortValue) {
  const sortedItems = Array.from(allFilterItems).sort((a, b) => {
    if (sortValue === "alphabetical") {
      const itemA = a.querySelector("p").textContent.toLowerCase();
      const itemB = b.querySelector("p").textContent.toLowerCase();
      return itemA.localeCompare(itemB);
    } else if (sortValue === "price-high") {
      const priceA = parseFloat(
        a.querySelector("p").textContent.replace(/[^\d.]/g, "")
      );
      const priceB = parseFloat(
        b.querySelector("p").textContent.replace(/[^\d.]/g, "")
      );
      return priceB - priceA;
    } else if (sortValue === "price-low") {
      const priceA = parseFloat(
        a.querySelector("p").textContent.replace(/[^\d.]/g, "")
      );
      const priceB = parseFloat(
        b.querySelector("p").textContent.replace(/[^\d.]/g, "")
      );
      return priceA - priceB;
    }
  });

  displaySortedItems(sortedItems);
}

function displaySortedItems(sortedItems) {
  const dispProducts = document.querySelector(".products_container");

  // Remove existing items from the display container
  while (dispProducts.firstChild) {
    dispProducts.removeChild(dispProducts.firstChild);
  }

  // Append sorted items to the display container
  sortedItems.forEach((item) => {
    dispProducts.appendChild(item);
  });
}

// Sorting functionality
const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", () => {
  const sortValue = sortSelect.value;
  sortItems(sortValue);
});

// Checkout
function checkout() {
  const modalFooter = document.querySelector(".cart_container");
  modalFooter.innerHTML = `
  <div class="tick-animation" >
      <p>Checkout successful!</p>
      <svg fill="#192A51 " height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#192A51 "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1 c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256 S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315 c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047 C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256 c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687 c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064 C482.762,174.736,478.245,172.445,474.045,173.813z"></path> <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161 c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344 s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75 c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663 c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411 c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314 c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037 s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728 c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978 S509.502,87.794,504.969,83.262z"></path> </g> </g></svg>
    </div>
  `;
  cart = [];
  updateCart();
}
