let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile");

hamburger.addEventListener("click", function () {
hamburger.classList.toggle("open");
mobileMenu.classList.toggle("show");
});

   let pageLoader = document.querySelector(".pageloader");
window.addEventListener("load", function () {
pageLoader.style.display =("none");
});

let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal-container");
let modalImg = document.querySelector(".modal-img");
let pictures = document.querySelectorAll(".picture");

console.log(pictures);
for (let index = 0; index < pictures.length; index++) {
 pictures[index].addEventListener("click", (event) => {

       console.log(event);
      let image;
      image = event.target.src
      console.log(image);
      modal.style.display = "flex"
      modalImg.src = image
    });  
  }

  closeBtn.addEventListener("click", ()=> {
     modal.style.display = "none"
  })