const aboutPage = () => {
  const content = document.querySelector("#content");
  console.log("I'm about");

  const heading = document.createElement("h2");

  heading.innerHTML = "About";

  const para = document.createElement("p");
  para.innerHTML =
    "Rawmen started with a craving — not just for ramen, but for something real. Tired of watered-down broths and copy-paste menus, we set out to create a spot where every bowl tells a story. We believe ramen should hit hard — with flavour, texture, and vibe. <br> Founded in 2024 by a small crew of ramen lovers and culinary rebels, Rawmen is built on deep simmered broths, handpicked ingredients, and a passion for doing things differently. Inspired by the underground ramen bars of Tokyo and the grit of local street food, Rawmen fuses tradition with innovation, comfort with chaos. <br>This isn’t just ramen. This is Rawmen — raw, bold, and unforgettable.";

  content.appendChild(heading);
  content.appendChild(para);
};

export default aboutPage;
