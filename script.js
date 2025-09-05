document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");

  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    if (name && email && phone) {

      message.textContent = `💖 Thanks ${name}! Your details have been received successfully.`;

      form.reset();

    } else {

      message.textContent = "⚠️ Please fill all fields!";

      message.style.color = "red";

    }

  });

});