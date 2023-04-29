
// DOMContentLoaded check
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById('contactForm');

  // Sticky navbar
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });


  // Form validation

  // Get the form elements by their IDs
  const nameInput = document.getElementById("contactFormName");
  const emailInput = document.getElementById("contactFormEmail");
  const subjectInput = document.getElementById("contactFormSubject");
  const messageInput = document.getElementById("contactFormMessage");

  // Form confirmation message
  const successMessage = document.getElementById('contactFormSuccess');

  // Attach an event listener for when the form is submitted
  form.addEventListener("submit", (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of the form inputs
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Check if the required fields are filled in
    if (nameValue === "") {
      alert("Vennligst fyll inn namn.");
      return false;
    }
    if (emailValue === "") {
      alert("Vennligst fyll inn ei e-postadresse.");
      return false;
    }
    if (messageValue === "") {
      alert("Fyll inn ei melding.");
      return false;
    }

    // Check if the email is valid
    if (!isValidEmail(emailValue)) {
      alert("E-postadressa er ikkje gyldig");
      return false;
    }

    // Show the confirmation message
    successMessage.classList.remove('d-none');
  });

  // Define the isValidEmail function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

});

  // DOMContentLoaded  end



// $(document).ready(function() {
//   $('.carousel').carousel({interval: 4000});
// });