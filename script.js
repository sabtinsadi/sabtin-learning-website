function trackClick() {
  alert("Button clicked! You can track this event in Google Analytics later.");

  if (typeof gtag === "function") {
    gtag("event", "get_started_click", {
      event_category: "button",
      event_label: "Get Started Button"
    });
  }
}
function trackFormSubmit(event) {
  event.preventDefault();

  if (typeof gtag === "function") {
    gtag("event", "contact_form_submit", {
      form_name: "Contact Form"
    });
  }

  alert("Contact Form Submitted!");
}
