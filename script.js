// FAQ-Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Alle anderen schließen
      faqItems.forEach((other) => {
        other.classList.remove("is-open");
      });

      // Geklicktes ggf. öffnen
      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });
});


const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const toggleDetails = document.getElementById("toggle-details");
  const questionnaire = document.getElementById("questionnaire");

  if (toggleDetails && questionnaire) {
    toggleDetails.addEventListener("change", () => {
      if (toggleDetails.checked) {
        questionnaire.classList.add("is-open");
      } else {
        questionnaire.classList.remove("is-open");
      }
    });
  }

  // 🔹 Formspree-Handler hier ergänzen
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // verhindert Seitenwechsel

      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "danke.html";
      } else {
        alert("Etwas ist schiefgelaufen. Bitte versuch es später erneut.");
      }
    });
  }
 // 🔹 Tooltip-Logik für "Korrekturschleife"-Fragezeichen
  const tooltips = document.querySelectorAll(".info-tooltip");

  if (tooltips.length > 0) {
    // Beim Tippen/Klicken auf das ?-Icon: Tooltip toggeln
    tooltips.forEach((tip) => {
      tip.addEventListener("click", (event) => {
        event.stopPropagation(); // verhindert, dass der Document-Handler direkt wieder schließt

        const isOpen = tip.classList.contains("is-open");

        // Erst alle schließen …
        tooltips.forEach((t) => t.classList.remove("is-open"));

        // … dann ggf. dieses öffnen
        if (!isOpen) {
          tip.classList.add("is-open");
        }
      });
    });

    // Beim Tippen/Klicken irgendwo anders: alle Tooltips schließen
    document.addEventListener("click", () => {
      tooltips.forEach((t) => t.classList.remove("is-open"));
    });
  }
});

