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
          title: "Prioridade na Admissão Escolar para Dependentes de Mulheres Vítimas de Violência Doméstica",
          description: "Propor lei municipal que priorize a admissão de dependentes de mulheres vítimas de violência doméstica em escolas municipais."
      },
      {
          title: "Acompanhamento Psicológico para Sobreviventes de Violência Doméstica",
          description: "Defender o acompanhamento psicológico para sobreviventes de violência doméstica nas Unidades Básicas de Saúde, garantindo apoio emocional e orientação."
      },
      {
          title: "Serviço de Planejamento Reprodutivo",
          description: "Propor a implementação do Serviço de Planejamento Reprodutivo em Campo Grande, facilitando o acesso a métodos anticoncepcionais e acompanhamento para mulheres em situação de vulnerabilidade."
      }
  ],
  "Combate à Desigualdade Social": [
      {
          title: "Estatuto Municipal da Igualdade Racial",
          description: "Propor a criação do Estatuto Municipal da Igualdade Racial em parceria com a Subsecretaria da Promoção da Igualdade Racial, visando aumentar investimentos em políticas afirmativas para a população negra, indígena, quilombola e periférica."
      },
      {
          title: "Museu da Memória Negra",
          description: "Trabalhar para a criação do Museu da Memória Negra em Campo Grande para valorizar a história e contribuições de pessoas que ajudaram no desenvolvimento da cidade, ampliando o conhecimento sobre a população local."
      },
      {
          title: "Cozinha Popular",
          description: "Articular a criação de um Restaurante Popular e Cozinhas Comunitárias em Campo Grande para atender pessoas em situação de vulnerabilidade e garantir segurança alimentar."
      },
      {
          title: "Habitação para LGBTQIAPN+",
          description: "Desenvolver programas que garantam moradias seguras e acessíveis, focando em jovens desabrigados, idosos e transgêneros em vulnerabilidade."
      }
  ],
      "Mobilidade Urbana": [
          {
            "title": "Fiscalização do Consórcio Guaicurus",
            "description": "Fiscalizar o contrato do Consórcio Guaicurus, responsável pelos transportes coletivos públicos de Campo Grande."
          },
          {
            "title": "Implementação do Tarifa Zero",
            "description": "Articular a implementação do Tarifa Zero, garantindo transportes públicos de qualidade, intervalos menores e mais linhas de acesso aos bairros."
          },
          {
            "title": "Integração de Modais de Transporte Urbano",
            "description": "Garantir a integração de modais de transporte urbano com alargamentos de calçamento para pedestres no centro e espaços públicos, instalação de bicicletários e integração de ciclovias, priorizando o transporte ativo."
          }
        ],
        "Meio Ambiente":[
          {
            "title": "Combate e Prevenção aos Danos Causados pelas Chuvas e Enchentes",
            "description": "Fortalecer as políticas públicas e cobrar ações de infraestrutura da prefeitura para combate e prevenção aos danos causados pelas chuvas e enchentes, especialmente nos bairros periféricos."
          },
          {
            "title": "Projeto de Hortas Urbanas Coletivas",
            "description": "Propor o Projeto de hortas urbanas coletivas, criando uma economia circular local e cadeias produtivas de sociobiodiversidade, promovendo o direito à cidade e à saúde, com auxílio ao pequeno produtor."
          },
          {
            "title": "Sistema de Reciclagem com Composteiras",
            "description": "Encaminhar a implementação de um Sistema de Reciclagem com a distribuição de composteiras em locais que produzem grande quantidade de lixo orgânico, como restaurantes, escolas e EMEIs."
          },
          {
            "title": "Execução da Política Estadual de Educação Ambiental",
            "description": "Garantir a execução da Lei 5.287, que institui a Política Estadual de Educação Ambiental (PEEA/MS), nas escolas municipais de ensino infantil ao fundamental."
          },
          {
            "title": "Campanha Campo Grande Verde",
            "description": "Propor a Campanha Campo Grande Verde para mitigação de danos climáticos, com plantio de árvores em áreas autorizadas, promovendo proteção ambiental e melhor qualidade de vida urbana."
          },
          {
            "title": "Plano Municipal de Adaptação e Resiliência à Mudança do Clima",
            "description": "Propor o Plano Municipal de Adaptação e Resiliência à Mudança do Clima, visando reduzir os impactos das ações humanas no Meio Ambiente, especialmente no bioma Pantaneiro."
          }
        ],
  "Combate à Desigualdade Social":[
          {
            "title": "Estatuto Municipal da Igualdade Racial",
            "description": "Criação do Estatuto Municipal da Igualdade Racial em parceria com a Subsecretaria da Promoção da Igualdade Racial, promovendo investimentos para políticas afirmativas e de reparação à população negra e indígena."
          },
          {
            "title": "Acesso à Moradia",
            "description": "Trabalhar para articular o acesso à moradia para toda a população, promovendo a destinação de terrenos e prédios abandonados para a habitação de pessoas em situação de vulnerabilidade."
          },
          {
            "title": "Educação Desigualdade Nunca Mais",
            "description": "Propor o Projeto de Educação Desigualdade Nunca Mais, promovendo orientação e desenvolvimento de teorias e práticas sociais que integrem saberes e histórias, incluindo autores indígenas, africanos, afro-brasileiros e de mulheres."
          },
          {
            "title": "Campanha Permanente de Combate ao Racismo",
            "description": "Criar uma campanha permanente de combate ao racismo nas escolas municipais de ensino infantil e fundamental."
          },
          {
            "title": "Museu da Memória Negra",
            "description": "Estabelecer o Museu da Memória Negra em Campo Grande para materializar a memória e vida de pessoas que contribuíram para o desenvolvimento da cidade, ampliando o conhecimento sobre a população no contexto sul-mato-grossense."
          },
          {
            "title": "Programa Campo Grande Acessível para Todos",
            "description": "Trabalhar para promover a acessibilidade em todos os espaços públicos da cidade, garantindo medidas de adaptação e sinalização para pessoas com deficiência, gestantes, idosos, obesos e outros grupos que necessitam de cuidados específicos."
          },
          {
            "title": "Frente Parlamentar em Defesa da Pessoa com Deficiência",
            "description": "Criar a Frente Parlamentar em Defesa da Pessoa com Deficiência para fiscalizar e implementar políticas de inclusão e acessibilidade, promover ações de conscientização e averiguar a acessibilidade em locais públicos e privados."
          }
        ],
" Cultura":[
          {
            "title": "Fiscalização do Orçamento Cultural",
            "description": "Fiscalizar o orçamento destinado à cultura e seus principais projetos, como a Lei Paulo Gustavo e a Lei Aldir Blanc."
          },
          {
            "title": "Frente Parlamentar em Defesa da Cultura",
            "description": "Criar a Frente Parlamentar em Defesa da Cultura de Campo Grande-MS para garantir o debate e suporte na área para o desenvolvimento cultural do município."
          },
          {
            "title": "Cidade do Samba",
            "description": "Articular a criação da Cidade do Samba no ‘Espaço Municipal de Cultura Vila Morena’, aproveitando a praça de alimentação para organizar matinês e folias, contribuindo para o lazer e o turismo local."
          },
          {
            "title": "Programa Emergencial de Retomada do Setor de Eventos (Porse)",
            "description": "Ampliar o Programa Emergencial de Retomada do Setor de Eventos, oferecendo auxílio financeiro, incentivos fiscais e suporte para a recuperação econômica dos profissionais do setor afetados pela pandemia."
          },
          {
            "title": "Fiscalização da Lei do Silêncio",
            "description": "Fiscalizar a Lei do Silêncio, promovendo inovação nas áreas de lazer, meio ambiente, saúde, segurança e sossego público por meio de reuniões com o setor vigente."
          },
          {
            "title": "Projeto Ruas de Lazer",
            "description": "Propor o Projeto Ruas de Lazer para incentivar e viabilizar a realização de atividades de lazer e culturais em vias públicas urbanas."
          },
          {
            "title": "Mapa Cultural de Campo Grande",
            "description": "Inovar e acompanhar o Mapa Cultural de Campo Grande, promovendo a atualização e divulgação do mapeamento cultural para cadastrar trabalhadores e dar visibilidade aos projetos da região."
          },
          {
            "title": "Projeto Economia Criativa Cultural",
            "description": "Propor o Projeto Economia Criativa Cultural, desenvolvendo mapas de financiamento de projetos culturais e uma cartilha para elaboração, execução e prestação de contas, estimulando e apoiando novos projetos."
          }
        ],
"Educação":[
          {
            "title": "Fiscalização das EMEIS",
            "description": "Fiscalizar as EMEIS de ensino infantil e fundamental, garantindo o repasse de recursos para melhoria de infraestrutura, apoio educacional e mental para o desenvolvimento da criança e do adolescente."
          },
          {
            "title": "Saúde Mental dos Profissionais da Educação",
            "description": "Garantir a saúde mental dos profissionais da educação, propondo auxílio psicológico e valorização da saúde integral dos principais agentes no desenvolvimento da primeira infância."
          },
          {
            "title": "Educação de Linguagens",
            "description": "Trabalhar e articular o projeto de Educação de Linguagens, desenvolvendo a capacidade de interação social entre não ouvintes e ouvintes, promovendo uma comunicação humana e letrada com uma educação inclusiva."
          },
          {
            "title": "Adequação Tecnológica dos Espaços Educacionais",
            "description": "Garantir a adequação dos espaços educacionais com tecnologias atuais e desenvolver a capacitação dos profissionais para uso e habilidades com os novos recursos."
          },
          {
            "title": "Valorização Salarial dos Profissionais da Educação",
            "description": "Trabalhar para a valorização salarial dos profissionais da educação e processos seletivos mais estáveis, possibilitando segurança de vida."
          },
          {
            "title": "Construção de EMEIS",
            "description": "Ampliar o sistema educacional com a construção de mais EMEIS, garantindo vagas para todas as crianças em espaços de cuidado e aprendizagem."
          },
          {
            "title": "Projeto Aprender Mais",
            "description": "Articular a implementação do Projeto Aprender Mais como lei de recuperação dos níveis de alfabetização e conhecimentos nas EMEIS, garantindo o desenvolvimento socioeducacional das crianças."
          }
        ],
"Saúde": [
          {
            "title": "Fiscalização das Unidades de Saúde",
            "description": "Fiscalizar Unidades Básicas de Saúde e Unidades de Pronto Atendimento, garantindo o repasse de recursos para melhoria de infraestrutura e materiais hospitalares para um atendimento eficaz."
          },
          {
            "title": "Ampliação da Rede de Saúde Pública",
            "description": "Garantir a ampliação da rede de saúde pública com mais Unidades Básicas de Saúde, especialmente nos bairros periféricos, e ampliar equipes para Saúde da Família."
          },
          {
            "title": "Política Nacional de Proteção da Saúde (PNPS)",
            "description": "Fortalecer a PNPS com academias ao ar livre e atividades qualificadas para a população em diferentes regiões da cidade."
          },
          {
            "title": "Projeto Farmácia Viva",
            "description": "Implementar o projeto Farmácia Viva para integrar a fitoterapia como opção terapêutica para a população."
          },
          {
            "title": "Dia do Trabalho Invisível",
            "description": "Buscar a adoção do Dia do Trabalho Invisível para reconhecer a importância do trabalho não pago ou não valorizado, promovendo o cuidado de qualidade para quem necessita."
          },
          {
            "title": "Restaurante Popular e Cozinhas Comunitárias",
            "description": "Criar o Restaurante Popular e Cozinhas Comunitárias para garantir segurança alimentar e uma alimentação digna para a população em situação de vulnerabilidade."
          },
          {
            "title": "Regulamentação do Quadro Técnico de Nutricionistas",
            "description": "Buscar a regulamentação do quadro técnico de nutricionistas na alimentação escolar, conforme a portaria CRN-3 343/2018."
          },
          {
            "title": "Valor Per Capita da Alimentação Escolar",
            "description": "Revisar e ampliar o valor per capita da alimentação escolar para garantir uma alimentação adequada e saudável."
          },
          {
            "title": "Quadro Técnico de Nutricionistas no NASF",
            "description": "Avaliar e ampliar o quadro técnico de nutricionistas no NASF conforme a portaria CRN-3 340/2018 para promover a saúde e prevenção de CCNT."
          },
          {
            "title": "Necessidades da População com Deficiência",
            "description": "Identificar e fiscalizar as necessidades da população com deficiência em relação aos serviços oferecidos pelo Centro Especializado Municipal, garantindo capacidade de atendimento e recursos adequados."
          },
          {
            "title": "Suporte Emocional e Psicológico para Cuidadores",
            "description": "Comprometer-se com o suporte emocional e psicológico dos cuidadores de pessoas com deficiência e idosos, visando o bem-estar dos cuidados prestados."
          }
        ],
"Maternar":[
          {
            "title": "Atividades ao Ar Livre para Famílias",
            "description": "Garantir a qualidade de vida dos pais e das crianças propondo circuitos de atividades ao ar livre, como yoga, caminhada, danças e exercícios físicos nas praças de Campo Grande, abrangendo as sete regiões da cidade."
          },
          {
            "title": "Vale Alimentação Mãe que Amamenta",
            "description": "Propor a criação do Vale Alimentação Mãe que Amamenta em apoio ao aleitamento materno, proporcionando uma alimentação adequada e saudável para mães e crianças, em parceria com o projeto de hortas urbanas coletivas e estabelecimentos parceiros."
          },
          {
            "title": "Humanização do Parto",
            "description": "Garantir e fortalecer políticas públicas de humanização do parto, possibilitando a criação de uma nova Casa de Parto Pública em Campo Grande, com assistência às mães gestantes e auxílio no processo de se tornar mãe."
          },
          {
            "title": "Programa de Apoio às Adolescentes",
            "description": "Criar o Programa de Apoio às Adolescentes, fortalecendo o Programa de Dignidade Menstrual, garantindo a educação da saúde da mulher e orientação às adolescentes gestantes para diminuir a evasão escolar."
          },
          {
            "title": "Kit Maternidade",
            "description": "Garantir a oferta do Kit Maternidade disponibilizado pela política de assistência social coordenada pelo CRAS, oferecendo um auxílio enxoval para o recém-nascido e incentivando a realização do pré-natal e manutenção do cartão de vacinação em dia."
          },
          {
            "title": "Empregabilidade de Mães",
            "description": "Promover a empregabilidade de mães, mobilizando empresas e feiras locais para disponibilizar vagas de emprego para mães de crianças a partir de 5 meses e oferecer qualificação através de cursos profissionalizantes online."
          }
        ],
"Mandato":[
          {
            "title": "Gabinete Itinerante",
            "description": "Promover o Gabinete Itinerante para facilitar a interação e aproximação do mandato com a população urbana e rural, permitindo acesso a informações e serviços públicos."
          },
          {
            "title": "Transparência das Ações Fiscais",
            "description": "Assegurar a prestação pública e transparência das ações fiscais e atividades do mandato."
          },
          {
            "title": "Edital Público para Emendas",
            "description": "Criar um Edital Público para a destinação de emendas a serem votadas na Câmara Municipal de Campo Grande."
          },
          {
            "title": "Educação Política Guiada",
            "description": "Implementar o Projeto Educação Política Guiada, que visa a participação de jovens no conhecimento da rotina da Câmara Municipal através de visitas guiadas e promoção da participação política."
          },
          {
            "title": "Programa Acredita",
            "description": "Ampliar o acesso ao Programa Acredita do Governo Federal, que oferece crédito com taxas de juros diferenciadas para pequenos empreendedores."
          }
        ],
}
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
    description.style.display = description.style.display === "none" ? "block" : "none";
  });

  item.appendChild(title);
  item.appendChild(description);
  return item;
}

function renderProposals(filteredProposals) {
  proposalList.innerHTML = "";
  filteredProposals.forEach(proposal => {
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
  return proposals.filter(proposal => {
    return proposal.title.toLowerCase().includes(searchLower) ||
           proposal.description.toLowerCase().includes(searchLower);
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