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

  headerElem.appendChild(homeButton);
  headerElem.appendChild(menuButton);
  headerElem.appendChild(contactButton);

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
