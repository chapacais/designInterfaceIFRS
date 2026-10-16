const lista = document.querySelector('.menu-principal .lista');
const botao = document.querySelector('.menu-principal .botao');
const links = document.querySelectorAll('.menu-principal .link');

function abrirFecharMenu() {
  lista.classList.toggle('-aberto');
  botao.classList.toggle('-aberto');
}

function fecharMenu() {
  lista.classList.remove('-aberto');
  botao.classList.remove('-aberto');
}

botao.addEventListener('click', abrirFecharMenu);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', fecharMenu);
}
