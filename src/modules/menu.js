import beefStroganoff from "../images/beefstroganoff.png";
import burger from "../images/burger.png";
import curry from "../images/curry.png";
import padthai from "../images/padthai.png";
import pasta from "../images/pasta.png";
import pizza from "../images/pizza.png";
import salmon from "../images/salmon.png";
import tikkimasala from "../images/tikkimasala.png";
import tiramisu from "../images/tiramisu.png";
import wrap from "../images/wrap.png";

const foodFactory = (img, name, description) => {
  const foodCard = document.createElement("div");
  foodCard.classList.add("food-card");
  foodCard.appendChild(document.createElement("img"));
  foodCard.lastChild.setAttribute("src", img);
  foodCard.appendChild(document.createElement("h5"));
  foodCard.lastChild.textContent = name;
  foodCard.appendChild(document.createElement("p"));
  foodCard.lastChild.textContent = description;

  return foodCard;
};

export default function menuPage(contentElem) {
  const dish1 = foodFactory(
    pasta,
    "Pesto Pasta",
    "Pasta with homemade pesto sauce"
  );
  const dish2 = foodFactory(
    salmon,
    "Grilled Salmon",
    "Fresh salmon grilled with lemon and herbs"
  );
  const dish3 = foodFactory(
    tikkimasala,
    "Chicken Tikka Masala",
    "Chicken marinated in spices and cooked in a creamy tomato sauce"
  );
  const dish4 = foodFactory(
    beefStroganoff,
    "Beef Stroganoff",
    "Tender beef strips cooked in a rich mushroom sauce"
  );
  const dish5 = foodFactory(
    pizza,
    "Margherita Pizza",
    "Classic pizza with tomato sauce, mozzarella, and fresh basil"
  );
  const dish6 = foodFactory(
    padthai,
    "Pad Thai",
    "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts"
  );
  const dish7 = foodFactory(
    wrap,
    "Falafel Wrap",
    "Falafel balls with lettuce, tomatoes, and tahini sauce wrapped in a pita"
  );
  const dish8 = foodFactory(
    burger,
    "Beef Burger",
    "Juicy beef patty with cheese, lettuce, and tomato on a brioche bun"
  );
  const dish9 = foodFactory(
    curry,
    "Vegetable Curry",
    "Assorted vegetables cooked in a spicy curry sauce"
  );
  const dish10 = foodFactory(
    tiramisu,
    "Tiramisu",
    "Classic Italian dessert with layers of mascarpone cheese and ladyfingers"
  );

  const foods = [
    dish1,
    dish2,
    dish3,
    dish4,
    dish5,
    dish6,
    dish7,
    dish8,
    dish9,
    dish10,
  ];
  const homeContent = document.createElement("div");
  homeContent.classList.add("menu-content");

  foods.forEach((food) => {
    homeContent.appendChild(food);
  });

  contentElem.appendChild(homeContent);
}
