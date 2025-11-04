const projetos = {
  pokerole: {
    titulo: "Bot Pokerole Discord",
    imagem: "src/imagens/pokerole.png",
    descricao: "Um bot para o discord que gera pokémon para o RPG de mesa Pokerole",
    link: "",
    tecnologias: ["Python", "Discord.py"],
    detalhes: "Este bot foi desenvolvido para auxiliar mestres e jogadores do RPG Pokerole, automatizando a geração de pokémons e facilitando o gerenciamento das fichas.",
    github:"https://github.com/pablotq/PokeRole-Discord.py/tree/main"
  },
  botflix: {
    titulo: "BotFlix",
    imagem: "src/imagens/botflix.jpg",
    descricao: "Projeto envolvendo automação n8n e IA que recomenda um filme ou série para você",
    link: "https://pablotq.github.io/botflix",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)", "n8n", "API TMDB"],
    detalhes: "Este bot foi desenvolvido para indicar uma sugestão de filme ou série de acorodo com os detalhes que são passados para ele",
    github:"https://github.com/pablotq/botflix"
  },
  visualisadorPerfilGithub: {
    titulo: "Visualisador de Perfil do Github",
    imagem: "src/imagens/github-viewer.jpg",
    descricao: "Projeto envolvendo a API do Github para buscar informações de usuário e seus repositórios",
    link: "https://pablotq.github.io/visualizador-perfil-github",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)", "API Github"],
    detalhes: "Esse projeto foi desenvolvido com o intuito de buscar informações do usuário exibindo seu avatar, nome e biografia. Além de listar os 10 últimos repositórios criados pelo usuário, com links diretos.",
    github:"https://github.com/pablotq/visualizador-perfil-github"
  },
  dbz: {
    titulo: "Projeto DBZ",
    imagem: "src/imagens/dbz.jpg",
    descricao: "Projeto feito usando HTML, CSS e JavaScript com a temática de Dragon Ball",
    link: "https://pablotq.github.io/projeto-dbz",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)"],
    detalhes: "Esse projeto foi desenvolvido no início do meu curso com objetivo de aprender responsividade.",
    github:"https://github.com/pablotq/projeto-dbz"
  },
  // Adicione mais projetos aqui
};

document.querySelectorAll('.projeto').forEach(projeto => {
  projeto.addEventListener('click', () => {
    const projetoId = projeto.dataset.projeto;
    const projetoData = projetos[projetoId];
    
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('h2');
    const modalImg = modal.querySelector('img');
    const modalInfo = modal.querySelector('.modal-info');
    const modalLink = document.getElementById('modal-link');
    const modalGithub = document.getElementById('modal-github');
    
    modalTitle.textContent = projetoData.titulo;
    modalImg.src = projetoData.imagem;
    modalImg.alt = projetoData.titulo;
    modalInfo.innerHTML = `
      <p class= 'modal-descricao'>${projetoData.descricao}</p>
      <p><strong>Tecnologias:</strong> ${projetoData.tecnologias.join(', ')}</p>
      <p>${projetoData.detalhes}</p>
    `;
    modalLink.href = projetoData.link;
    modalGithub.href = projetoData.github
    
    modal.style.display = "block";
  });
});

// Fechar o modal
const modal = document.getElementById('modal');
const span = document.getElementsByClassName("close")[0];

span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};