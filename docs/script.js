const barsBtn = document.querySelector(".fa-bars", ".fa-bars-hide");
const navItems = document.querySelectorAll(".nav-item");
const cajaNavItems = document.querySelector(".navbar-text");
const cajaFotoCarrito = document.querySelector(
  ".caja-foto-carrito",
  ".caja-foto-carrito-hide"
);

barsBtn.addEventListener("click", () => {
  cajaNavItems.className = cajaNavItems.className.includes("navbar-text")
    ? "navbar-hide"
    : "navbar-text";

  cajaFotoCarrito.className = cajaNavItems.className.includes("navbar-text")
    ? "caja-foto-carrito-hide"
    : "caja-foto-carrito";
});

const widthDetect = () => {
  cajaNavItems.className =
    window.innerWidth <= 800 ? "navbar-hide" : "navbar-text";
};

window.addEventListener("load", () => {
  widthDetect();
});

window.addEventListener("resize", () => {
  widthDetect();
});
