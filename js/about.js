// Partners
let partners = [
  {
    id: 1,
    img: "https://i.postimg.cc/B6wtBcLs/adidas-logo-removebg-preview.png",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/LX9dG8wV/epl-logo-removebg-preview.png",
  },
];
let partnersecond = [
  {
    id: 1,
    img: "https://i.postimg.cc/9QPCkKzC/absa-removebg-preview.png",
  },

  {
    id: 2,
    img: "https://i.postimg.cc/tTq0BKQG/lotto-logo-removebg-preview.png",
  },
];

let disPartners = document.querySelector(".carousel-item-first");
partners.forEach((data) => {
  disPartners.innerHTML += `
   
    <img src="${data.img}" class="partner-img">
         `;
});
let disPartnerssecond = document.querySelector(".carousel-item-second");
partnersecond.forEach((data) => {
  disPartnerssecond.innerHTML += `
   
    <img src="${data.img}" class="partner-img">
         `;
});
