const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

burger.addEventListener("click", ()=>{
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menu.style.flexDirection = "column";
});
