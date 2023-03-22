import "./style/style.css";
import * as headerFooter from "./modules/header-footer";

function Render() {
  const bodySelector = document.querySelector("body");

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");

  bodySelector.appendChild(contentDiv);

  headerFooter.createFooter(contentDiv);
  headerFooter.createHeader(contentDiv);
}

Render();
