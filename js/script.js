// javascript tolong carikan document yang classnya diberi nama navbar-nav
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
