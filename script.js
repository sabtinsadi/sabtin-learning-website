function trackClick() {
  alert("Button clicked! You can track this event in Google Analytics later.");

  if (typeof gtag === "function") {
    gtag("event", "get_started_click", {
      event_category: "button",
      event_label: "Get Started Button"
    });
  }
}
