export default function clearElem(contentElem) {
  while (contentElem.firstChild) {
    contentElem.removeChild(contentElem.firstChild);
  }
}
