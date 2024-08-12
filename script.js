document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Abrir/fechar o menu ao clicar no ícone do hambúrguer
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // Fechar o menu ao clicar em um link
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });

  // Fechar o menu ao clicar fora do menu ou do hambúrguer
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });
});
