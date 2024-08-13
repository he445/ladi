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
  
    const proposalsByArea = {
      area1: [
        {
          title: "Sistema Único de Bem Estar Animal",
          description:
            "Trabalhar e articular para que Campo Grande tenha um Sistema Único de Bem Estar Animal (SUBEA) com o seu primeiro hospital público veterinário com atendimento gratuito de consultas, emergências, castrações e cirurgias, melhorando a qualidade de vida dos animais e seus cuidadores.",
        },
        { title: "Proposta 4", description: "Descrição da proposta 4." },
      ],
      area2: [{ title: "Proposta 2", description: "Descrição da proposta 2." }],
      area3: [{ title: "Proposta 3", description: "Descrição da proposta 3." }],
    };
  
    const proposalList = document.getElementById("proposal-list");
    const areaSelector = document.getElementById("area-selector");
  
    function updateProposalList() {
      const selectedArea = areaSelector.value;
      proposalList.innerHTML = "";
  
      if (selectedArea === "all") {
        for (const area in proposalsByArea) {
          proposalsByArea[area].forEach((proposal) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${proposal.title}</strong>: ${proposal.description}`;
            proposalList.appendChild(listItem);
          });
        }
      } else {
        proposalsByArea[selectedArea].forEach((proposal) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${proposal.title}</strong>: ${proposal.description}`;
          proposalList.appendChild(listItem);
        });
      }
    }
  
    areaSelector.addEventListener("change", updateProposalList);
    updateProposalList(); // Inicializa a lista com todas as propostas
  });
  