 // ✨ Typewriter Effect

const text = "B.Sc CS Student | Aspiring Software Developer | Future Zoho Engineer";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.getElementById("tagline").innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 80); // typing speed

  }

}

// call function when page loads

window.onload = typeWriter;

// 👋 Say Hello Button

function sayHello() {

  alert("Hello! Thanks for visiting my portfolio 😊");

}

// 🌙 Dark Mode Toggle

function toggleDarkMode() {

  const body = document.body;

  body.classList.toggle("dark");

  const btn = document.getElementById("darkModeBtn");

  if (body.classList.contains("dark")) {

    btn.textContent = "☀️ Light Mode";

  } else {

    btn.textContent = "🌙 Dark Mode";

  }

}