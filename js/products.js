
//Balls

let balls = [
  {
    id: 1,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  },
  {
    id: 2,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  },
  {
    id: 3,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  },
  {
    id: 4,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  },
  {
    id: 5,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  },
  {
    id: 6,
        img: "https://i.postimg.cc/Hx7hB4Rn/epl-ball.jpg",
        itemName: "EPL Match Ball",
        desc: "The 22/23 season match ball of the premier league",
        price: 500, 
  }
]
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
]

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

let boots =[
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

]
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
]
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