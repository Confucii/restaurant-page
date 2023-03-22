import imgCook from "../images/hero-cook.png";
import imgRestaurant from "../images/restaurant.png";
import imgStaff from "../images/staff.png";

export default function homePage(contentElem) {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const imgDiv = document.createElement("div");
  imgDiv.appendChild(document.createElement("img"));
  imgDiv.classList.add("content-img");

  const txtDiv = document.createElement("div");
  txtDiv.appendChild(document.createElement("h4"));
  txtDiv.appendChild(document.createElement("p"));
  txtDiv.classList.add("content-txt");

  const founderImg = imgDiv.cloneNode(true);
  const founderTxt = txtDiv.cloneNode(true);
  const locationTxt = txtDiv.cloneNode(true);
  const locationImg = imgDiv.cloneNode(true);
  const promiseImg = imgDiv.cloneNode(true);
  const promiseTxt = txtDiv.cloneNode(true);

  founderImg.firstChild.setAttribute("src", imgCook);
  locationImg.firstChild.setAttribute("src", imgRestaurant);
  promiseImg.firstChild.setAttribute("src", imgStaff);

  founderTxt.firstChild.textContent = "Story";
  founderTxt.lastChild.textContent =
    "Pencil Sketch Kitchen, established twelve years ago, is a restaurant where every dish is a work of art, drawn in pencil by skilled chefs. The idea came from a group of passionate artists who combined their love for art and food to create a unique dining experience. The restaurant gained popularity among foodies and art enthusiasts, constantly evolving its menu with new dishes and pencil sketches. It has become a well-known destination for food and art lovers, hosting art exhibitions and events, and inspiring customers with its artistic approach to food.";
  locationTxt.firstChild.textContent = "Location";
  locationTxt.lastChild.textContent =
    "The main location of Pencil Sketch Kitchen is situated in the center of Vienna. The restaurant is located in a spacious building that was previously an art gallery. The interiors of the restaurant are adorned with pencil sketches of various dishes, adding to the artistic ambiance. The kitchen is open, allowing customers to witness the chefs at work, drawing and preparing their dishes. The location is easily accessible by public transportation, and it is a popular destination for tourists and locals alike who are looking for a unique dining experience.";
  promiseTxt.firstChild.textContent = "Promise";
  promiseTxt.lastChild.textContent =
    "Our talented chefs use their artistic skills to bring every dish to life, from the appetizers to the desserts. At our restaurant, you will not only enjoy an unforgettable culinary experience, but also have the opportunity to admire the intricate pencil drawings that accompany each dish. Our carefully curated decor showcases the incredible talent of our chefs and will transport you to a world of creativity and imagination.";

  homeContent.appendChild(founderImg);
  homeContent.appendChild(founderTxt);
  homeContent.appendChild(locationTxt);
  homeContent.appendChild(locationImg);
  homeContent.appendChild(promiseImg);
  homeContent.appendChild(promiseTxt);

  contentElem.appendChild(homeContent);
}
