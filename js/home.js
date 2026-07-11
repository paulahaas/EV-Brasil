/**
 * Lógica da página inicial (index.html).
 */
(function () {
  mountChrome("home");

  // Ilustração do herói: usa o primeiro modelo em destaque (o Seal, esportivo).
  const heroCar = VEHICLES.find((v) => v.id === "byd-seal") || VEHICLES[0];
  const heroVisual = document.getElementById("heroVisual");
  if (heroVisual) heroVisual.innerHTML = carImage(heroCar);

  // Grade de destaques.
  const featured = VEHICLES.filter((v) => v.featured);
  const grid = document.getElementById("featuredGrid");
  if (grid) grid.innerHTML = featured.map(createCard).join("");

  // Preenche o select de modelos no formulário de contato.
  const modeloSelect = document.getElementById("modelo");
  if (modeloSelect) {
    modeloSelect.innerHTML =
      '<option value="">Selecione um modelo</option>' +
      VEHICLES.map((v) => `<option value="${v.id}">${v.brand} ${v.model}</option>`).join("");

    // Se veio de um link com ?modelo=id, pré-seleciona.
    const params = new URLSearchParams(location.search);
    const preset = params.get("modelo");
    if (preset) modeloSelect.value = preset;
  }

  // Envio do formulário (simulado — sem backend).
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      if (!nome.value.trim() || !email.value.trim()) {
        nome.focus();
        return;
      }
      msg.classList.add("show");
      form.reset();
      msg.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => msg.classList.remove("show"), 6000);
    });
  }
})();
