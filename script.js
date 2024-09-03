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

  // Objeto com propostas por área (as áreas serão definidas com base nas pautas)
  const proposalsByArea = {
    "Valorização das Mulheres": [
      {
        title:
          "Prioridade na Admissão Escolar para Dependentes de Mulheres Vítimas de Violência Doméstica",
        description:
          "Propor lei municipal que priorize a admissão de dependentes de mulheres vítimas de violência doméstica em escolas municipais.",
      },
      {
        title:
          "Acompanhamento Psicológico para Sobreviventes de Violência Doméstica",
        description:
          "Defender o acompanhamento psicológico para sobreviventes de violência doméstica nas Unidades Básicas de Saúde, garantindo apoio emocional e orientação.",
      },
      {
        title: "Serviço de Planejamento Reprodutivo",
        description:
          "Propor a implementação do Serviço de Planejamento Reprodutivo em Campo Grande, facilitando o acesso a métodos anticoncepcionais e acompanhamento para mulheres em situação de vulnerabilidade.",
      },
    ],
    "Combate à Desigualdade Social": [
      {
        title: "Estatuto Municipal da Igualdade Racial",
        description:
          "Propor a criação do Estatuto Municipal da Igualdade Racial em parceria com a Subsecretaria da Promoção da Igualdade Racial, visando aumentar investimentos em políticas afirmativas para a população negra, indígena, quilombola e periférica.",
      },
      {
        title: "Museu da Memória Negra",
        description:
          "Trabalhar para a criação do Museu da Memória Negra em Campo Grande para valorizar a história e contribuições de pessoas que ajudaram no desenvolvimento da cidade, ampliando o conhecimento sobre a população local.",
      },
      {
        title: "Cozinha Popular",
        description:
          "Articular a criação de um Restaurante Popular e Cozinhas Comunitárias em Campo Grande para atender pessoas em situação de vulnerabilidade e garantir segurança alimentar.",
      },
      {
        title: "Habitação para LGBTQIAPN+",
        description:
          "Desenvolver programas que garantam moradias seguras e acessíveis, focando em jovens desabrigados, idosos e transgêneros em vulnerabilidade.",
      },
    ],
    "Segurança Pública": [
      {
        title: "Ampliação da Patrulha Maria da Penha",
        description:
          "Defender a ampliação da Patrulha Maria da Penha (GCM) para garantir atendimento qualificado e proteção a mulheres em situação de violência doméstica.",
      },
      {
        title: "Acompanhamento da Saúde Mental dos Servidores de Segurança",
        description:
          "Promover o acompanhamento da saúde mental dos servidores públicos de segurança, com apoio de profissionais especializados.",
      },
      {
        title: "Cultura de Cuidado e Segurança",
        description:
          "Fomentar uma cultura de cuidado e segurança para a população e comunidade atendida.",
      },
    ],
    "Direitos dos Animais": [
      {
        title: "Sistema Único de Bem-Estar Animal",
        description:
          "Propor a implementação de um Sistema Único de Bem-Estar Animal em Campo Grande.",
      },
      {
        title: "Hospital Público Veterinário",
        description:
          "Articular a criação do primeiro hospital público veterinário que irá oferecer atendimento gratuito para consultas, emergências, castrações e cirurgias.",
      },
      {
        title: "Qualidade de Vida dos Animais e Cuidadores",
        description:
          "Atuar para a melhoria da qualidade de vida dos animais e seus cuidadores e protetores através de ações de saúde mental dos cuidadores.",
      },
    ],
    "Mobilidade Urbana": [
      {
        title: "Fiscalização do Consórcio Guaicurus",
        description:
          "Fiscalizar o contrato do Consórcio Guaicurus, responsável pelo transporte coletivo em Campo Grande.",
      },
      {
        title: "Campanha 'Vou de Bike'",
        description:
          "Propor a campanha 'Vou de Bike' para incentivar o uso da bicicleta como meio de transporte sustentável.",
      },
      {
        title: "Selo 'Empresa Amiga do Ciclista'",
        description:
          "Criar o Selo 'Empresa Amiga do Ciclista' para reconhecer empresas que incentivam o uso de bicicletas entre colaboradores e clientes.",
      },
      {
        title: "Energia Solar para Semáforos",
        description:
          "Propor a implementação de energia solar para semáforos em Campo Grande, promovendo sustentabilidade e economia de energia.",
      },
    ],
    "Meio Ambiente": [
      {
        title: "Sistema de Reciclagem com Composteiras",
        description:
          "Propor um PL para garantir um Sistema de Reciclagem com composteiras em locais com alto volume de lixo orgânico, como restaurantes, escolas e EMEIS.",
      },
      {
        title: "Programa de Gestão de Resíduos Orgânicos",
        description:
          "Propor a criação do Programa de Gestão de Resíduos Orgânicos nas escolas públicas de Campo Grande, focando na coleta, separação e compostagem de resíduos.",
      },
      {
        title: "Educação Ambiental e Sustentabilidade",
        description:
          "Promover educação ambiental e sustentabilidade entre alunos e funcionários para reduzir o impacto ambiental e fomentar a consciência ecológica desde a infância.",
      },
    ],
    "A Cultura Transforma": [
      {
        title: "Fiscalização do Orçamento Destinado à Cultura",
        description:
          "Fiscalizar o orçamento destinado à cultura e seus principais projetos, como a Lei Paulo Gustavo, Lei Aldir Blanc e FMIC.",
      },
      {
        title: "Calendário da Cultura Afro-Brasileira",
        description:
          "Criar um calendário da cultura afro-brasileira em Campo Grande, destacando eventos e promovendo a valorização da identidade afro-brasileira.",
      },
      {
        title: "Cultura no Centro",
        description:
          "Incentivar a cultura no Centro, com ampliação de calçadas, eventos culturais, segurança e promover empreendimentos locais, inspirado no projeto 'Ocupa o Centro' de Goiânia.",
      },
      {
        title: "Expressão Artística em Espaços Públicos",
        description:
          "Promover a utilização de espaços públicos para expressão artística por meio do grafite e outras intervenções, valorizando a cultura urbana e incentivando artistas locais.",
      },
    ],
    "Educação e Valorização": [
      {
        title: "Fiscalização das EMEIS",
        description:
          "Fiscalizar as EMEIS para garantir repasse de recursos para infraestrutura e apoio educacional e mental.",
      },
      {
        title: "Saúde Mental dos Profissionais da Educação",
        description:
          "Ter atenção à saúde mental dos profissionais da educação e da comunidade escolar com políticas que auxiliem na saúde mental e valorização.",
      },
      {
        title:
          "Valorização Salarial e Estabilidade para Profissionais da Educação",
        description:
          "Promover valorização salarial e processos seletivos estáveis para os profissionais da educação, garantindo segurança na carreira.",
      },
      {
        title: "Construção de Mais EMEIS",
        description:
          "Articular recursos para construir mais EMEIS, cobrar e fiscalizar a prefeitura assegurando vagas para todas as crianças.",
      },
    ],
    "Saúde como Direito e Defesa do SUS": [
      {
        title: "Fiscalização das UBS e UPAs",
        description:
          "Fiscalizar Unidades Básicas de Saúde e UPAs para garantir recursos para infraestrutura e abastecimento de medicamentos.",
      },
      {
        title: "Dia do Trabalho do Cuidado",
        description:
          "Propor o Dia do Trabalho do Cuidado, reconhecendo a importância do cuidado não remunerado e promovendo a saúde integral das mulheres.",
      },
      {
        title: "Regulamentação de Nutricionistas na Alimentação Escolar",
        description:
          "Colaborar para a regulamentação do quadro de nutricionistas na alimentação escolar, conforme a portaria CRN-3 343/2018, para promover a saúde dos alunos.",
      },
      {
        title: "Ampliação do Quadro de Nutricionistas no NASF",
        description:
          "Defender a ampliação do quadro de nutricionistas no NASF, conforme portaria CRN-3 340/2018, focando na promoção da saúde e prevenção de doenças crônicas.",
      },
      {
        title: "Suporte Emocional e Psicológico aos Cuidadores",
        description:
          "Defender o suporte emocional e psicológico aos cuidadores de pessoas com deficiência e idosos, visando o bem-estar de todos.",
      },
      {
        title: "Capacitação Contínua para Servidores Públicos",
        description:
          "Apoiar a implementação de programas contínuos de capacitação para servidores públicos nas áreas de saúde, educação e assistência social, respeitando as especificidades da comunidade LGBTQIAPN+.",
      },
      {
        title: "Divulgação dos Canais do CVV",
        description:
          "Implementar a obrigatoriedade da divulgação dos canais do Centro de Valorização da Vida (CVV) em órgãos públicos, aumentando o acesso ao suporte emocional e prevenção do suicídio.",
      },
    ],
    "Responsabilidades Familiares e de Cuidado": [
      {
        title: "Atividades ao Ar Livre para Pais e Crianças",
        description:
          "Promover qualidade de vida para pais e crianças com atividades ao ar livre, como yoga e caminhadas, em praças de Campo Grande.",
      },
      {
        title: "Vale Alimentação Mãe que Amamenta",
        description:
          "Propor a criação do Vale Alimentação Mãe que Amamenta, incentivando o aleitamento materno com alimentação saudável, em parceria com hortas urbanas e produtores locais.",
      },
      {
        title: "Humanização no Atendimento às Gestantes",
        description:
          "Defender políticas públicas que promovam a humanização no atendimento às gestantes em Campo Grande, assegurando que todas as gestantes tenham acesso a cuidados de saúde respeitosos e de alta qualidade.",
      },
    ],
    "Participação Popular e Transparência": [
      {
        title: "Gabinete Itinerante",
        description:
          "Promover a interação entre o mandato e a população urbana e rural, facilitando o acesso a informações sobre serviços públicos.",
      },
      {
        title: "Transparência",
        description:
          "Garantir prestação pública e transparência nas atividades do mandato.",
      },
      {
        title: "Edital Público",
        description:
          "Criar edital para destinação de emendas a serem votadas na Câmara Municipal de Campo Grande.",
      },
      {
        title: "Dia do Jovem Vereador",
        description:
          "Programa para jovens conhecerem a política participando de um dia de trabalho na câmara.",
      },
    ],
  };
  const proposalList = document.getElementById("proposal-list");
  const searchInput = document.getElementById("search");
  const areaSelector = document.getElementById("area-selector");

  function createProposalItem(proposal) {
    const item = document.createElement("li");
    item.className = "proposal-item"; // Adiciona a classe CSS para a proposta

    const title = document.createElement("h3");
    title.textContent = proposal.title;
    title.className = "proposal-title"; // Classe CSS para o título

    const description = document.createElement("p");
    description.textContent = proposal.description;
    description.className = "proposal-description"; // Classe CSS para a descrição
    description.style.display = "none"; // Inicialmente, a descrição está oculta

    title.addEventListener("click", () => {
      description.style.display =
        description.style.display === "none" ? "block" : "none";
    });

    item.appendChild(title);
    item.appendChild(description);
    return item;
  }

  function renderProposals(filteredProposals) {
    proposalList.innerHTML = "";
    filteredProposals.forEach((proposal) => {
      proposalList.appendChild(createProposalItem(proposal));
    });
  }

  function filterProposals(searchTerm, selectedArea) {
    const searchLower = searchTerm.toLowerCase();
    let proposals = [];

    // Se uma área específica for selecionada, filtra as propostas dessa área
    if (selectedArea !== "all") {
      proposals = proposalsByArea[selectedArea];
    } else {
      // Se "all" for selecionado, inclui propostas de todas as áreas
      for (const area in proposalsByArea) {
        proposals = proposals.concat(proposalsByArea[area]);
      }
    }

    // Filtra as propostas com base no termo de busca
    return proposals.filter((proposal) => {
      return (
        proposal.title.toLowerCase().includes(searchLower) ||
        proposal.description.toLowerCase().includes(searchLower)
      );
    });
  }

  // Renderiza as propostas inicialmente (todas as áreas)
  renderProposals(filterProposals("", "all"));

  // Popula o seletor de áreas com as opções disponíveis
  function populateAreaSelector() {
    for (const area in proposalsByArea) {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      areaSelector.appendChild(option);
    }
    // Adiciona a opção para mostrar todas as áreas
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todas as Áreas";
    areaSelector.insertBefore(allOption, areaSelector.firstChild);
    areaSelector.value = "all"; // Define "Todas as Áreas" como opção padrão
  }

  populateAreaSelector();

  // Adiciona ouvintes de evento para a caixa de busca e o seletor de áreas
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;
    const selectedArea = areaSelector.value;
    const filtered = filterProposals(searchTerm, selectedArea);
    renderProposals(filtered);
  });

  areaSelector.addEventListener("change", () => {
    const searchTerm = searchInput.value;
    const selectedArea = areaSelector.value;
    const filtered = filterProposals(searchTerm, selectedArea);
    renderProposals(filtered);
  });
});
