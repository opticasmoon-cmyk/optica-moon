const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

burger.addEventListener("click", ()=>{
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menu.style.flexDirection = "column";
  menu.style.position = "absolute";
  menu.style.top = "60px";
  menu.style.right = "0";
  menu.style.background = "white";
  menu.style.padding = "20px";
});
