import "./style/style.css";
import * as headerFooter from "./modules/header-footer";
import homePage from "./modules/main-page";

function Render() {
  const bodySelector = document.querySelector("body");

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");

  bodySelector.appendChild(contentDiv);

  headerFooter.createFooter(contentDiv);
  headerFooter.createHeader(contentDiv);
  homePage(contentDiv);
}

Render();
