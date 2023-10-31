
export function contactPage(infoArea) {
  const contactTitle = document.createElement("p");
  contactTitle.textContent = "CONTACT US";
  contactTitle.classList.add("pageTitle");
  infoArea.appendChild(contactTitle);

  const contactIntroDiv = document.createElement("div");
  contactIntroDiv.classList.add("contactIntroDiv");
  infoArea.appendChild(contactIntroDiv);

  const contactIntro = document.createElement("p");
  contactIntro.innerHTML = "Whether you have questions,<br> wish to make a reservation,<br> or just want to say hello,<br> this is the place to reach us directly.<br> Choose from the three contact options on the left, or simply fill out the contact form, and we'll get back to you shortly.";
  contactIntroDiv.appendChild(contactIntro);

  const contactFormSpace = document.createElement("div");
  contactFormSpace.classList.add("contactFormSpace");
  infoArea.appendChild(contactFormSpace);

  const listedInfo = document.createElement("div");
  listedInfo.classList.add("listedInfo");
  contactFormSpace.appendChild(listedInfo);

  const formSide = document.createElement("div");
  formSide.classList.add("formSide");
  contactFormSpace.appendChild(formSide);

  const form = document.createElement("form");
  form.classList.add("formArea");
  formSide.appendChild(form);

  //function to format the input boxes + labels
  function contactFormLayout(labelName, labelContent) {
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("labelDiv");
    form.appendChild(labelDiv);

    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", labelName);
    inputLabel.textContent = labelContent;
    labelDiv.appendChild(inputLabel);

    const inputForm = document.createElement("input");
    inputForm.type = "text";
    inputForm.name = labelName;
    inputForm.setAttribute("id", labelName);
    labelDiv.appendChild(inputForm);
  }

  contactFormLayout("userName", "Name");
  contactFormLayout("emailAddress", "Email Address");
  contactFormLayout("contactNumber", "Phone Number");
  contactFormLayout("messageSubject", "Subject Title");

  //message text box
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("labelDiv");
  form.appendChild(messageDiv);

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "messageArea");
  messageLabel.textContent = "Message";
  messageDiv.appendChild(messageLabel);

  const messageArea = document.createElement("textarea");
  messageArea.name = "messageArea";
  messageArea.setAttribute("id", "messageArea");
  messageDiv.appendChild(messageArea);


  //submit button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "SUBMIT";
  form.appendChild(submitButton);

  //form validation messages
  const submitSuccessful = document.createElement("p");
  submitSuccessful.classList.add("submitSuccessful");
  formSide.appendChild(submitSuccessful);

  const submitUnsuccessful = document.createElement("p");
  submitUnsuccessful.classList.add("submitUnsuccessful");
  form.appendChild(submitUnsuccessful);

  //form validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textBoxes = document.querySelectorAll('input[type="text"]');
    let totalFilledBox = 0;

    textBoxes.forEach((textBox) => {
      if (textBox.value !== "") {
        totalFilledBox += 1;
      }
    });
    if (messageArea.value !== "") {
      totalFilledBox += 1;
    }

    if (totalFilledBox === textBoxes.length + 1) {
      submitSuccessful.textContent =
        "Enquiry successfully submitted. We will be in contact shortly.";
      form.style.display = "none";
    } else {
      submitUnsuccessful.textContent =
        "Submit unsuccessful. Please fill in all fields correctly.";
    }
  });

  //left listing info
  const contactInfo = [
    "Come and speak to us at:",
    "17 High Street,<br> Edinburgh EH1 2BG,<br> Scotland,<br> United Kingdom",
    "Call us on:",
    "0123 456 78912",
    "Send us an email at:",
    "pretendemail@gmail.com",
  ];

  contactInfo.forEach((item, index) => {
    const subject = document.createElement("p");
    subject.innerHTML = item;
    listedInfo.appendChild(subject);

    if (index % 2 === 0) {
      subject.style.fontWeight = "bold";
      if (index !== 0) {
        subject.style.marginTop = "50px";
      }
    }
  });
}
