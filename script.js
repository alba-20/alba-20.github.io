const jabones = {
  eucalipto: {
    titulo: "Jabón Eucalipto",
    descripcion:
      "Ideal para pieles grasas. Refresca, limpia y tiene propiedades antisépticas naturales.",
    imagen: "eucalipto.avif",
  },
  miel: {
    titulo: "Jabón Miel",
    descripcion:
      "Nutre e hidrata profundamente la piel. Ideal para pieles secas y sensibles.",
    imagen: "miel.webp",
  },
  sabila: {
    titulo: "Jabón Sábila",
    descripcion:
      "Con extracto de aloe vera que ayuda a regenerar la piel, calmar irritaciones y quemaduras.",
    imagen: "sabila.jpg",
  },
  calendula: {
    titulo: "Jabón Caléndula",
    descripcion:
      "Antiinflamatorio natural, perfecto para pieles delicadas o con acné.",
    imagen: "calendula.jpg",
  },
};

// Mostrar modal
document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.closest("div");
    const title = parent.querySelector("h3").textContent;
    const key = title.toLowerCase().split(" ")[1];

    const jabon = jabones[key];

    document.getElementById("modal-title").textContent = jabon.titulo;
    document.getElementById("modal-description").textContent =
      jabon.descripcion;
    document.getElementById("modal-image").src = jabon.imagen;
    document.getElementById("modal").style.display = "block";
  });
});

// Cerrar modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

// Botón comprar
document.getElementById("buy-button").addEventListener("click", () => {
  alert("Gracias por tu interés 😊. Pronto podrás comprar directamente aquí.");
});

// Validar formulario
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("¡Mensaje enviado con éxito!");
    this.reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Ocultar bienvenida al hacer clic en "Tipos" o "Contacto"
document.querySelector('a[href="#jabones"]').addEventListener("click", () => {
  document.querySelector(".hero-negro.").style.display = "none";
});

document.querySelector('a[href="#contact"]').addEventListener("click", () => {
  document.querySelector(".hero-eucalipto").style.display = "none";
});

// Mostrar bienvenida cuando se haga clic en "Inicio"
document.querySelector('a[href="#home"]').addEventListener("click", () => {
  document.querySelector(".hero-eucalipto").style.display = "flex"; // Mostrar la sección de bienvenida
});

// Mostrar bienvenida cuando se haga clic en "Inicio"
document.querySelector('a[href="#home"]').addEventListener("click", () => {
  document.querySelector(".hero-eucalipto").style.display = "flex"; // Mostrar la sección de bienvenida
});
// Mostrar bienvenida al hacer clic en "Inicio"
const inicioBtn = document.getElementById("inicio-btn");
const bienvenida = document.getElementById("bienvenida");

inicioBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bienvenida.style.display = "block";
  window.scrollTo({
    top: bienvenida.offsetTop,
    behavior: "smooth",
  });
});
