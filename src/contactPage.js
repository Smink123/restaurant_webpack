export function contactPage(infoArea) {
  const contactTitle = document.createElement("p");
  contactTitle.textContent = "CONTACT US";
  contactTitle.classList.add("pageTitle");
  infoArea.appendChild(contactTitle);

  const contactIntroDiv = document.createElement("div");
  contactIntroDiv.classList.add("contactIntroDiv");
  infoArea.appendChild(contactIntroDiv);

  const contactIntro = document.createElement("p");
  contactIntro.textContent = "This is example text";
  contactIntroDiv.appendChild(contactIntro);

  const contactFormSpace = document.createElement("div");
  contactFormSpace.classList.add("contactFormSpace");
  infoArea.appendChild(contactFormSpace);

  const listedInfo = document.createElement("div");
  listedInfo.classList.add("listedInfo");
  contactFormSpace.appendChild(listedInfo);

  const formArea = document.createElement("div");
  formArea.classList.add("formArea");
  contactFormSpace.appendChild(formArea);

  //function to format the input boxes + labels
  function contactFormLayout(labelName, labelContent) {
    const labelDiv = document.createElement("div");
    formArea.appendChild(labelDiv);

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

  const contactInfo = [
    'Come and speak to us at',
    '17 High Street, Edinburgh EH1 2BG, Scotland, United Kingdom',
    'Call us on',
    '0123 456 78912',
    'Send us an email at',
    'pretendemail@gmail.com'
  ];

  contactInfo.forEach(item => {
    const subject = document.createElement('p');
    subject.textContent = item;
    listedInfo.appendChild(subject);
  })
}