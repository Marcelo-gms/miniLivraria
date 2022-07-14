const btnMenu = document.querySelector('[data-js="btn-menu"]');
const menuLista = document.querySelector('[data-js="nav-list"]');
const icon = document.querySelector('[data-js="btn-menu"] i');

btnMenu.addEventListener("click", e => {
  e.preventDefault();
  mudarIconMenu(icon);
  addclass(menuLista);
});

const btnDetalhes = document.querySelectorAll('[data-js="detalhes"] button');

const boxDetalhes = document.querySelectorAll('[data-js="info-produtos"]');

btnDetalhes.forEach((BB, index) => {
  BB.addEventListener("click", (e) => {
    e.preventDefault();
    textButton(BB);
    if (index == "0") {
      boxDetalhes[0].classList.toggle("mostrar");
    } else if (index == 1) {
      boxDetalhes[1].classList.toggle("mostrar");
    } else if (index == 2) {
      boxDetalhes[2].classList.toggle("mostrar");
    } else if (index == 3) {
      boxDetalhes[3].classList.toggle("mostrar");
    } else if (index == 4) {
      boxDetalhes[4].classList.toggle("mostrar");
    } else if (index == 5) {
      boxDetalhes[5].classList.toggle("mostrar");
    }
  });
});

const addclass = (El) => {
  if (El.classList.contains("show")) {
    El.classList.remove("show");
  } else {
    El.classList.add("show");
  }
  return El;
};

const mudarIconMenu = (x) => {
  if (x.classList.contains("fa-bars")) {
    x.classList.remove("fa-bars");
    x.classList.add("fa-xmark");
  } else {
    x.classList.remove("fa-xmark");
    x.classList.add("fa-bars");
  }
  return x;
};

const textButton = (value) => {
  if (value.classList.contains("x")) {
    value.classList.remove("x");
    value.textContent = "Detalhes";
  } else {
    value.classList.add("x");
    value.textContent = "Fechar";
  }

  return value;
};