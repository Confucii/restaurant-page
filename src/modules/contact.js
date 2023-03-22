const createInput = (
  type,
  name,
  required,
  minlength,
  pattern,
  placeholder,
  labelName
) => {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", type);
  inputElem.setAttribute("name", name);
  inputElem.setAttribute("id", name);
  if (required) inputElem.required = true;
  if (minlength) inputElem.setAttribute("minlength", minlength);
  if (pattern) inputElem.setAttribute("pattern", pattern);
  inputElem.setAttribute("placeholder", placeholder);

  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", name);
  inputLabel.textContent = labelName;

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(inputElem);

  return inputDiv;
};

export default function contactPage(contentElem) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");

  const contactForm = document.createElement("form");
  contactForm.appendChild(document.createElement("h1"));
  contactForm.firstChild.textContent = "Contact us!";
  contactForm.classList.add("contact-form");
  contactForm.appendChild(
    createInput(
      "text",
      "name",
      true,
      "3",
      "^[A-Za-z]+(?:s+[A-Za-z]+)*$",
      "Your name",
      "Name"
    )
  );

  contactForm.appendChild(
    createInput("email", "email", true, "", "", "Your email", "Email")
  );

  contactDiv.appendChild(contactForm);

  contentElem.appendChild(contactDiv);
}
