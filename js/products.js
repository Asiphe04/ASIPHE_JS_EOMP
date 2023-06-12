//Balls

let balls = [
  {
    id: 1,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "UCL ball",
    desc: "Adidas UCL traning ball for the 22/23 season",
    price: 799.99,
  },
  {
    id: 2,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "Moldel UEL ball",
    desc: "Moldel UEL match ball for the 22/23 season",
    price: 499.99,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "Moldel Uefa Conference ball",
    desc: "Moldel Uefa conference ball for the 22/23 season",
    price: 299.99,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "EPL Match Ball",
    desc: "The 22/23 season match ball of the premier league",
    price: 450.0,
  },
  {
    id: 5,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "PSL Match Ball",
    desc: "The 22/23 season match ball of the premier soccer league, also known as the DSTV Premiership",
    price: 149.99,
  },
  {
    id: 6,
    img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
    itemName: "Laliga Match Ball",
    desc: "The 22/23 season match ball of the LaLiga",
    price: 350.0,
  },
];
let dispballs = document.querySelector(".balls");

balls.forEach((data) => {
  dispballs.innerHTML += `
 
    <div class="top-picks-items col-3 container">
      <div class="img-container">
        <img src="${data.img}" alt="" class="top-picks-img">
      </div>  
      <p>${data.itemName}<br>R${data.price}</p>
      <button class="btn-add-to-cart btn">Add to Cart</button>
      <button class="btn-see-more btn" onclick="openPopup('popup1')">See more</button>
    </div>  
  </div>`;
});

//End of Soccer balls
// Trophies
let trophies = [
  {
    id: 1,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 4499.99,
  },
  {
    id: 2,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "EPL",
    desc: "The best league in the world, the most watched league in the world.",
    price: 4500.8,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UEL",
    desc: "The trophy that blongs to Sevilla, as they have won it more than 5 times - so you would say they are the Real Madri of Europa",
    price: 2799.99,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "Uefa Conference League",
    desc: "Trophy was previously won by one of the greatest managers of all time - Jose Mourinho",
    price: 1999.99,
  },
  {
    id: 5,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "PSL",
    desc: "The most competitive league in Africa, well not anymore because Sundowns has won it more than 5 times in a row",
    price: 2300,
  },
  {
    id: 6,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "La Liga",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 3500.0,
  },
];

let dispTrophies = document.querySelector(".trophies");

trophies.forEach((data) => {
  dispTrophies.innerHTML += `
 
    <div class="top-picks-items col-3 container">
      <div class="img-container">
        <img src="${data.img}" alt="" class="top-picks-img">
      </div>  
      <p>${data.itemName}<br>R${data.price}</p>
      <button class="btn-add-to-cart btn">Add to Cart</button>
      <button class="btn-see-more btn" onclick="openPopup('popup1')">See more</button>
    </div>  
  </div>`;
});

let boots = [
  {
    id: 1,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 2,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 5,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 6,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
];
let dispBoots = document.querySelector(".boots");

boots.forEach((data) => {
  dispBoots.innerHTML += `
 
    <div class="top-picks-items col-3 container">
      <div class="img-container">
        <img src="${data.img}" alt="" class="top-picks-img">
      </div>  
      <p>${data.itemName}<br>R${data.price}</p>
      <button class="btn-add-to-cart btn">Add to Cart</button>
      <button class="btn-see-more btn" onclick="openPopup('popup1')">See more</button>
    </div>  
  </div>`;
});

let tShirts = [
  {
    id: 1,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "Arsenal Home",
    desc: "The kit of the best football club in the world",
    price: 1599.99,
  },
  {
    id: 2,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "BVB Home",
    desc: "Dortmund will never dissapoint with their kits",
    price: 999.99,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "Liverpool",
    desc: "",
    price: 500,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 5,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
  {
    id: 6,
    img: "https://i.postimg.cc/SKzHdQq2/ucl-trophy.jpg",
    itemName: "UCL",
    desc: "The most valuable club trophy , even 99% of football players would say so.",
    price: 500,
  },
];
let dispTshirts = document.querySelector(".tShirts");

tShirts.forEach((data) => {
  dispTshirts.innerHTML += `
 
    <div class="top-picks-items col-3 container">
      <div class="img-container">
        <img src="${data.img}" alt="" class="top-picks-img">
      </div>  
      <p>${data.itemName}<br>R${data.price}</p>
      <button class="btn-add-to-cart btn">Add to Cart</button>
      <button class="btn-see-more btn" onclick="openPopup('popup1')">See more</button>
    </div>  
  </div>`;
});
