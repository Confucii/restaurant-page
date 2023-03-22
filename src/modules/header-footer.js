export function createHeader(contentElem) {
  const headerElem = document.createElement("div");
  headerElem.setAttribute("class", "header");
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
