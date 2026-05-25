const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.getElementById("contact-form");
if (form) {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "New inquiry from The Computer Shop website:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `${form.action}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
    if (status) {
      status.textContent = "Opening WhatsApp with your details...";
      status.dataset.state = "success";
    }
  });
}
