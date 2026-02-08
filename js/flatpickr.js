document.addEventListener("DOMContentLoaded", function() {
  flatpickr("#arrivalDate", {
    dateFormat: "d.m.Y",
    minDate: "today",
    locale: "uk"
  });

  flatpickr("#departureDate", {
    dateFormat: "d.m.Y",
    minDate: "today",
    locale: "uk"
  });
});
