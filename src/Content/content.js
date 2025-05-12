export function loadContent() {
  console.log('Contact Us section loaded');
  // Set body class for styling
  document.body.className = 'content-active';

  // Change content in the center text section
  const content = document.querySelector('.CenterText');
  content.innerHTML = '';  // Title for the Contact Us page

  // Create the contact us form dynamically
  const contactForm = document.createElement('div');
  contactForm.classList.add('contact-us');

  // Contact Us Form Header
  const header = document.createElement('h2');
  header.innerText = 'We\'d Love to Hear from You!';
  contactForm.appendChild(header);

  const infoText = document.createElement('p');
  infoText.innerText = 'Whether you have a question, want to make a reservation, or just want to share your experience, feel free to reach out.';
  contactForm.appendChild(infoText);

  // Contact details section (email, phone, location)
  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contact-details');

  const emailItem = document.createElement('div');
  emailItem.classList.add('contact-item');
  emailItem.innerHTML = '<h3>Email:</h3><p><a href="mailto:info@restaurant99.com">info@restaurant99.com</a></p>';
  contactDetails.appendChild(emailItem);

  const phoneItem = document.createElement('div');
  phoneItem.classList.add('contact-item');
  phoneItem.innerHTML = '<h3>Phone:</h3><p><a href="tel:+1234567890">+1 (234) 567-890</a></p>';
  contactDetails.appendChild(phoneItem);

  const locationItem = document.createElement('div');
  locationItem.classList.add('contact-item');
  locationItem.innerHTML = '<h3>Location:</h3><p>Restaurant99, 123 Flavor Street, City, Country, 56789</p>';
  contactDetails.appendChild(locationItem);

  contactForm.appendChild(contactDetails);

  // Contact form
  const form = document.createElement('form');
  form.action = '/submit_contact';
  form.method = 'POST';

  const nameGroup = document.createElement('div');
  nameGroup.classList.add('form-group');
  nameGroup.innerHTML = '<label for="name">Your Name:</label><input type="text" id="name" name="name" required>';
  form.appendChild(nameGroup);

  const emailGroup = document.createElement('div');
  emailGroup.classList.add('form-group');
  emailGroup.innerHTML = '<label for="email">Your Email:</label><input type="email" id="email" name="email" required>';
  form.appendChild(emailGroup);

  const messageGroup = document.createElement('div');
  messageGroup.classList.add('form-group');
  messageGroup.innerHTML = '<label for="message">Message:</label><textarea id="message" name="message" required></textarea>';
  form.appendChild(messageGroup);

  const submitButton = document.createElement('button');
  submitButton.classList.add('contButton');
  submitButton.type = 'submit';
  submitButton.innerText = 'Send Message';
  form.appendChild(submitButton);

  contactForm.appendChild(form);

  // Append the Contact Us form to the content
  content.appendChild(contactForm);
}