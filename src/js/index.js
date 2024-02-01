const botao = document.querySelector(".btn-plataforma");
const elementoplataforma = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
    elementoplataforma.classList.toggle("ativo");
});