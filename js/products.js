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
let products = [
  {
    id: 1,
    img: "https://i.postimg.cc/m210H58y/adidas-ucl-trainig-removebg-preview.png",
    itemName: "UCL ball",
    desc: "Adidas UCL training ball for the 22/23 season",
    price: 799.99,
    category: "Ball",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/T1FFsVYb/molten-uel-removebg-preview.png",
    itemName: "Moldel UEL ball",
    desc: "Moldel UEL match ball for the 22/23 season",
    price: 499.99,
    category: "Ball",
    numberOfUnits: 11,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/DwLktMGw/ucol-ball-removebg-preview.png",
    itemName: "Moldel Uefa Conference ball",
    desc: "Moldel Uefa conference ball for the 22/23 season",
    price: 299.99,
    category: "Ball",
    numberOfUnits: 11,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/sfNk1r92/epl-ball-removebg-preview.png",
    itemName: "EPL Match Ball",
    desc: "The 22/23 season match ball of the Premier League",
    price: 450.99,
    category: "Ball",
    numberOfUnits: 11,
  },
  {
    id: 5,
    img: "https://i.postimg.cc/KjRCQqFF/fifa22-ball-removebg-preview.png",
    itemName: "FIFA 22 Match Ball",
    desc: "The ball played at the most valuable tournament",
    price: 149.99,
    category: "Ball",
    numberOfUnits: 11,
  },
  {
    id: 6,
    img: "https://i.postimg.cc/NMNW6h3p/laliga-ball-removebg-preview.png",
    itemName: "LaLiga Match Ball",
    desc: "The 22/23 season match ball of LaLiga",
    price: 350.99,
    category: "Ball",
    numberOfUnits: 11,
  },
  {
    id: 7,
    img: "https://i.postimg.cc/C5JWwDgD/ucl-removebg-preview.png",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 4499.99,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 8,
    img: "https://i.postimg.cc/02WL3pZ1/epl-removebg-preview.png",
    itemName: "EPL",
    desc: "The best league in the world, the most watched league in the world.",
    oldPrice: 10000.99,
    price: 4500.88,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 9,
    img: "https://i.postimg.cc/rm1BY3Zf/uel-removebg-preview.png",
    itemName: "UEL",
    desc: "The trophy that belongs to Sevilla, as they have won it more than 5 times - so you would say they are the Real Madri of Europa",
    price: 2799.99,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 10,
    img: "https://i.postimg.cc/nVk8K8Dz/conference-removebg-preview.png",
    itemName: "Uefa Conference League",
    desc: "Trophy was previously won by one of the greatest managers of all time - Jose Mourinho",
    price: 1999.99,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 11,
    img: "https://i.postimg.cc/90c63bvC/psl-removebg-preview.png",
    itemName: "PSL",
    desc: "The most competitive league in Africa, well not anymore because Sundowns has won it more than 5 times in a row",
    price: 2300.89,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 12,
    img: "https://i.postimg.cc/022TctYC/laliga-removebg-preview.png",
    itemName: "La Liga",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 3500.99,
    category: "Trophies",
    numberOfUnits: 11,
  },
  {
    id: 13,
    img: "https://i.postimg.cc/pVczYHsH/adidas-removebg-preview.png",
    itemName: "Adidas boots",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 4500.99,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 14,
    img: "https://i.postimg.cc/PrLZSR78/puma-removebg-preview.png",
    itemName: "Puma Boots",
    desc: "Innovative soccer boots by Puma, blending advanced technology, sleek design, and performance-enhancing features to elevate players' game to new heights.",
    price: 4000.91,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 15,
    img: "https://i.postimg.cc/LXq09TXY/suntec-removebg-preview.png",
    itemName: "Suntec Boots",
    desc: "Suntec soccer boots: Uniting style and functionality, Suntec presents a fresh approach to the game, combining comfort, precision, and eye-catching design for players who dare to stand out on the field.",
    oldPrice: 1500.99,
    price: 1000.99,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 16,
    img: "https://i.postimg.cc/DzMWHRhM/nike-removebg-preview.png",
    itemName: "Nike Boots",
    desc: "Cutting-edge soccer boots designed for optimal performance, style, and durability, empowering players to dominate the game.",
    price: 4999.99,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 17,
    img: "https://i.postimg.cc/Y0Ss04Z9/lotto-removebg-preview.png",
    itemName: "Lotto Boots",
    desc: "Lotto soccer boots: Crafted with meticulous attention to detail, Lotto delivers reliable performance and unmatched comfort, allowing players to unleash their skills with confidence and finesse on the soccer pitch.",
    oldPrice: 2500.99,
    price: 2100.99,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 18,
    img: "https://i.postimg.cc/s2Yz9NMZ/u-removebg-preview.png",
    itemName: "Umbro Boots",
    desc: "Umbro soccer boots: Embodying a rich heritage in the sport, Umbro's soccer boots merge timeless craftsmanship with modern technology, providing players with superior control, agility, and a touch of classic elegance, making every moment on the field truly iconic.",
    price: 3000.87,
    category: "Boots",
    numberOfUnits: 11,
  },
  {
    id: 19,
    img: "https://i.postimg.cc/2SWmt66g/bvb-removebg-preview.png",
    itemName: "BVB Home",
    desc: "Dortmund will never dissapoint with their kits",
    price: 999.99,
    category: "tShirts",
    numberOfUnits: 11,
  },
  {
    id: 20,
    img: "https://i.postimg.cc/TPXGv651/arsenal-removebg-preview.png",
    itemName: "Arsenal Home",
    desc: "The kit of the best football club in the world",
    price: 1599.99,
    category: "tShirts",
    numberOfUnits: 11,
  },

  {
    id: 21,
    img: "https://i.postimg.cc/C56Y3nbp/liverpool-removebg-preview.png",
    itemName: "Liverpool Home",
    desc: "Liverpool home kit features the iconic red color and incorporates elements of tradition and modern design.",
    price: 1499.99,
    category: "tShirts",
    numberOfUnits: 11,
  },
  {
    id: 22,
    img: "https://i.postimg.cc/yd1HWyPz/barcelona-removebg-preview.png",
    itemName: "FC Barcelona Home",
    desc: "Barcelona home kit showcases the club's traditional blue and red colors, embodying their rich history and distinctive Catalan identity.",
    price: 1500.99,
    category: "tShirts",
    numberOfUnits: 11,
  },
  {
    id: 23,
    img: "https://i.postimg.cc/65yBdzNW/chelsea-removebg-preview.png",
    itemName: "Chelsea Home",
    desc: "Chelsea  home kit is predominantly blue, representing the club's identity, and often features accents of white and red, combining tradition and modern aesthetics.",
    oldPrice: 1499.99,
    price: 999.99,
    category: "tShirts",
    numberOfUnits: 11,
  },

  {
    id: 24,
    img: "https://i.postimg.cc/wv29kGvv/mancity-removebg-preview.png",
    itemName: "Man City Home",
    desc: "Manchester City home kit typically features sky blue as the primary color, symbolizing the club's heritage, with modern design elements that represent their contemporary success and style.",
    price: 1099.95,
    category: "tShirts",
    numberOfUnits: 11,
  },
];
function renderProducts() {
  productsContainerEl.innerHTML = "";
  products.forEach((product) => {
    const { id, itemName, desc, img, price, category, numberOfUnits } = product;
    const productEl = document.createElement("div");
    productEl.innerHTML = `
        <div class="top-picks-items col-3 container all ${category}">
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
          <button class="btn-add-to-cart btn">Add to Cart</button>
        </div>
      </div>
    </div>
        `;

    productsContainerEl.appendChild(productEl);
  });
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
    const { id, itemName, desc, img, price, category, numberOfUnits } = product;
    const cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <div class="cartProduct">
        <div class="cart_product_flex">
        <div class="cart_product_img">
        <img src="${img}" alt="${itemName}" class="cart_img">
    </div>
    <div class="cart_product_title">
    <h3>${itemName}</h3>
    </div>
        </div>
        <div class="cart_product_price">
        <h3>Price: R${price}</h3>
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
  // check if there is an existing product in the cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const product = products.find((product) => product.id === id);
    cart.push({
      ...product,
      numberOfUnits: 1,
    });
  }

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
      } else if (action === "plus" && numberOfUnits < item.instock) {
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
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

// Sorting functionality
const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", () => {
  const sortValue = sortSelect.value;

  if (sortValue === "alphabetical") {
    sortItemsAlphabetically();
  } else if (sortValue === "price-high") {
    sortItemsByPriceHighToLow();
  } else if (sortValue === "price-low") {
    sortItemsByPriceLowToHigh();
  }
});

function sortItemsAlphabetically() {
  const sortedItems = Array.from(allFilterItems).sort((a, b) => {
    const itemA = a.querySelector("p").textContent.toLowerCase();
    const itemB = b.querySelector("p").textContent.toLowerCase();
    return itemA.localeCompare(itemB);
  });

  displaySortedItems(sortedItems);
}

function sortItemsByPriceHighToLow() {
  const sortedItems = Array.from(allFilterItems).sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector("p").textContent.replace(/[^\d.]/g, "")
    );
    const priceB = parseFloat(
      b.querySelector("p").textContent.replace(/[^\d.]/g, "")
    );
    return priceB - priceA;
  });

  displaySortedItems(sortedItems);
}

function sortItemsByPriceLowToHigh() {
  const sortedItems = Array.from(allFilterItems).sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector("p").textContent.replace(/[^\d.]/g, "")
    );
    const priceB = parseFloat(
      b.querySelector("p").textContent.replace(/[^\d.]/g, "")
    );
    return priceA - priceB;
  });

  displaySortedItems(sortedItems);
}

function displaySortedItems(sortedItems) {
  const dispBalls = document.querySelector(".balls");
  const dispTrophies = document.querySelector(".trophies");
  const dispBoots = document.querySelector(".boots");
  const dispTshirts = document.querySelector(".tShirts");

  sortedItems.forEach((item) => {
    if (dispBalls.contains(item)) {
      dispBalls.appendChild(item);
    } else if (dispTrophies.contains(item)) {
      dispTrophies.appendChild(item);
    } else if (dispBoots.contains(item)) {
      dispBoots.appendChild(item);
    } else if (dispTshirts.contains(item)) {
      dispTshirts.appendChild(item);
    }
  });
}
