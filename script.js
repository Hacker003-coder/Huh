const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const statusElement = document.getElementById("store-status");
if (statusElement) {
  const nowInIndia = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  const hour = nowInIndia.getHours();
  const openNow = hour >= 10 && hour < 20;
  statusElement.textContent = openNow
    ? "Open now • Closes at 8:00 PM"
    : "Currently closed • Opens at 10:00 AM";
}
