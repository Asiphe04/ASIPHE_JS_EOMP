// Partners
let partners = [
  {
    id: 1,
    img: "https://i.postimg.cc/mg5LGCBg/nike-logo-removebg-preview.png",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/B6wtBcLs/adidas-logo-removebg-preview.png",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/LX9dG8wV/epl-logo-removebg-preview.png",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/9QPCkKzC/absa-removebg-preview.png",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/J4xWk79c/laliga-logo-removebg-preview.png",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/tTq0BKQG/lotto-logo-removebg-preview.png",
  },
];

let disPartners = document.querySelector(".partners");
partners.forEach((data) => {
  disPartners.innerHTML += `
   
    <img src="${data.img}" class="partner-img">
         `;
});
