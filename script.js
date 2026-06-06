const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you for contacting The AIMS. We will get back to you soon.");

  form.reset();
});
