import clearElem from "./clear";
import homePage from "./main-page";
import menuPage from "./menu";
import contactPage from "./contact";

export function createHeader(contentElem) {
  const headerElem = document.createElement("div");
  headerElem.setAttribute("class", "header");

  const navButton = document.createElement("button");
  navButton.setAttribute("class", "nav-button");

  const homeButton = navButton.cloneNode();
  const menuButton = navButton.cloneNode();
  const contactButton = navButton.cloneNode();

  homeButton.textContent = "Home";
  homeButton.classList.add("active");
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  const buttons = [homeButton, menuButton, contactButton];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearElem(contentElem);
      buttons.forEach((_btn) => {
        if (_btn.classList.contains("active")) {
          _btn.classList.remove("active");
        }
      });
      btn.classList.add("active");

      if (btn.textContent === "Home") {
        homePage(contentElem);
      } else if (btn.textContent === "Menu") {
        menuPage(contentElem);
      } else {
        contactPage(contentElem);
      }
    });
    headerElem.appendChild(btn);
  });

  contentElem.before(headerElem);
}

export function createFooter(contentElem) {
  const footerElem = document.createElement("div");
  footerElem.setAttribute("class", "footer");
  const gitLink = document.createElement("a");
  gitLink.setAttribute("href", "https://github.com/Confucii");
  gitLink.textContent = "Created by Confucii!";
  footerElem.appendChild(gitLink);
  contentElem.after(footerElem);
}
