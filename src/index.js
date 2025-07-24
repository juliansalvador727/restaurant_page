import "./styles.css";
import aboutPage from "./about.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import render from "./render.js";

render();
homePage();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
  render();
  homePage();
});

menu.addEventListener("click", () => {
  render();
  menuPage();
});

about.addEventListener("click", () => {
  render();
  aboutPage();
});
