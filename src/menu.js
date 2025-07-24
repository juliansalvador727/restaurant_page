const menuPage = () => {
  const content = document.querySelector("#content");
  const elemList = [];
  const add = (elem) => {
    elemList.push(elem);
  };

  const signature = document.createElement("div");
  const signatureTitle = document.createElement("h2");
  signatureTitle.innerHTML = "Signature Bowls";
  const signatureItems = document.createElement("div");
  signatureItems.innerHTML = `
    <h3>🔥 Tonkotsu OG</h3>
    <p>Creamy pork bone broth, slow-braised chashu, ajitama egg, wood ear mushroom, black garlic oil.</p>
    <h3>🌶️ Spicy Miso Blast</h3>
    <p>Red miso broth with chili paste, ground pork, corn, bean sprouts, nori, and green onion.</p>
    <h3>🌱 Vegan Umami</h3>
    <p>Rich shiitake and kombu broth, marinated tofu, bok choy, sweet corn, chili crisp.</p>
    <h3>🍜 Shoyu Burn</h3>
    <p>Fire-roasted soy broth, chicken chashu, menma, narutomaki, sesame oil.</p>
  `;
  signature.appendChild(signatureTitle);
  signature.appendChild(signatureItems);
  add(signature);

  const toppingsTitle = document.createElement("h3");
  toppingsTitle.innerHTML = "Add-ons";

  const toppingsList = document.createElement("ul");
  const toppingItems = [
    "Extra Chashu",
    "Ajitama Egg",
    "Seaweed",
    "Chili Oil",
    "Noodle Refill",
  ];

  toppingItems.forEach((topping) => {
    const li = document.createElement("li");
    li.textContent = topping;
    toppingsList.appendChild(li);
  });

  add(toppingsTitle);
  add(toppingsList);

  elemList.forEach((elem) => {
    content.appendChild(elem);
  });

  console.log("I'm the menu");
};

export default menuPage;
