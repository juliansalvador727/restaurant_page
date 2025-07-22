import "./styles.css";
import { aboutPage } from "./about.js";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

aboutPage();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
  homePage();
});

menu.addEventListener("click", () => {
  menuPage();
});

about.addEventListener("click", () => {
  aboutPage();
});
