import pets from "../images/pets.png";

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

const headerAppend = (form, text) => {
  const formRef = form;
  formRef.appendChild(document.createElement("h1"));
  formRef.lastChild.textContent = text;
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
      "^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$",
      "Your name",
      "Name*"
    )
  );

  contactForm.appendChild(
    createInput("tel", "phone", false, "", "", "Your phone", "Phone")
  );

  contactForm.appendChild(
    createInput("email", "email", true, "", "", "Your email", "Email*")
  );

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const textareaLabel = document.createElement("label");
  textareaLabel.setAttribute("for", "message");
  textareaLabel.textContent = "Write us a message!*";

  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "message");
  textArea.setAttribute("name", "message");
  textArea.setAttribute("rows", "10");
  textArea.setAttribute("minlength", "20");
  textArea.setAttribute("cols", "55");
  textArea.required = true;

  inputDiv.appendChild(textareaLabel);
  inputDiv.appendChild(textArea);

  contactForm.appendChild(inputDiv);

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Send message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    while (contactForm.firstChild) {
      contactForm.removeChild(contactForm.firstChild);
    }
    headerAppend(contactForm, "Thank you for reaching out!");
    headerAppend(contactForm, "We will surely respond to you soon.");
    headerAppend(contactForm, "Meanwhile meet our cute pets!");
    contactForm.appendChild(document.createElement("img"));
    contactForm.lastChild.setAttribute("src", pets);
  });

  contactForm.appendChild(submitBtn);

  contactDiv.appendChild(contactForm);

  contentElem.appendChild(contactDiv);
}
