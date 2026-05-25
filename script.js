const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "New enquiry from The Computer Shop website:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    if (!form.action) {
      return;
    }
    const whatsappUrl = `${form.action}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  });
}
