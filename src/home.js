const homePage = () => {
  const content = document.querySelector("#content");
  const elemList = [];
  const add = (item) => {
    elemList.push(item);
  };

  const intro = document.createElement("h2");
  intro.innerHTML = "Welcome to Rawmen";

  const introText = document.createElement("p");
  introText.innerHTML =
    "Where flavor gets serious and noodles get personal. We're not your average ramen shop --- we're where rich broths, bold toppings, and unapologetic style meet.";

  add(intro);
  add(introText);

  const location = document.createElement("h3");
  location.innerHTML = "📍 Location";
  const locationText = document.createElement("p");
  locationText.innerHTML = "123 Flavor Street<br>Vancouver, BC V3A 1Z1";

  add(location);
  add(locationText);

  const hours = document.createElement("h3");
  hours.innerHTML = "🕒 Hours";

  const hoursText = document.createElement("p");
  hoursText.innerHTML =
    "Mon – Thu: 11:30 AM – 9:00 PM<br> Fri – Sat: 11:30 AM – 11:00 PM<br> Sun: 12:00 PM – 8:00 PM";

  add(hours);
  add(hoursText);

  elemList.forEach((item) => {
    content.appendChild(item);
  });
};

export default homePage;
