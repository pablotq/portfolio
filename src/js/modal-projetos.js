const projetos = {
  pokerole: {
    titulo: "Bot Pokerole Discord",
    imagem: "src/imagens/pokerole.png",
    descricao: "Um bot para o discord que gera pokémon para o RPG de mesa Pokerole",
    link: "",
    tecnologias: ["Python", "Discord.py"],
    detalhes: "Este bot foi desenvolvido para auxiliar mestres e jogadores do RPG Pokerole, automatizando a geração de pokémons e facilitando o gerenciamento das fichas.",
    github: "https://github.com/pablotq/PokeRole-Discord.py/tree/main"
  },
  botflix: {
    titulo: "BotFlix",
    imagem: "src/imagens/botflix.jpg",
    descricao: "Projeto envolvendo automação n8n e IA que recomenda um filme ou série para você",
    link: "https://pablotq.github.io/botflix",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)", "n8n", "API TMDB"],
    detalhes: "Este bot foi desenvolvido para indicar uma sugestão de filme ou série de acorodo com os detalhes que são passados para ele",
    github: "https://github.com/pablotq/botflix"
  },
  visualisadorPerfilGithub: {
    titulo: "Visualisador de Perfil do Github",
    imagem: "src/imagens/github-viewer.jpg",
    descricao: "Projeto envolvendo a API do Github para buscar informações de usuário e seus repositórios",
    link: "https://pablotq.github.io/visualizador-perfil-github",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)", "API Github"],
    detalhes: "Esse projeto foi desenvolvido com o intuito de buscar informações do usuário exibindo seu avatar, nome e biografia. Além de listar os 10 últimos repositórios criados pelo usuário, com links diretos.",
    github: "https://github.com/pablotq/visualizador-perfil-github"
  },
  dbz: {
    titulo: "Projeto DBZ",
    imagem: "src/imagens/dbz.jpg",
    descricao: "Projeto feito usando HTML, CSS e JavaScript com a temática de Dragon Ball",
    link: "https://pablotq.github.io/projeto-dbz",
    tecnologias: ["HTML", "CSS", "JavaScript(ES6)"],
    detalhes: "Esse projeto foi desenvolvido no início do meu curso com objetivo de aprender responsividade.",
    github: "https://github.com/pablotq/projeto-dbz"
  },
  ghibliFilms: {
    titulo: "Ghibli Films",
    imagem: "src/imagens/ghibli.jpg",
    descricao: "Este projeto é um catálogo interativo dos filmes do Studio Ghibli. A aplicação consome dados de uma API externa e apresenta os filmes em cards elegantes com detalhes individualizados.",
    link: "https://ghibli-films-nine.vercel.app/",
    tecnologias: ["React", "TypeScript", "Tailwind CSS" , "React Router", "Studio Ghibli API"],
    detalhes: "Esse projeto foi desenvolvido para ser um SPA (Single Page Application) com renderização dinãmica das paginas de detalhes dos filmes.",
    github: "https://github.com/pablotq/ghibli-films"
  },
  syntaxWear: {
    titulo: "SyntaxWear",
    imagem: "src/imagens/syntaxWear.jpg",
    descricao: "Este projeto é um frontend completo de uma loja online de tênis com páginas de produto, listagem, carrinho, autenticação básica e formulários.",
    link: "https://syntax-wear-app-sigma.vercel.app",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    detalhes: "Esse projeto foi desenvolvido com React e TypeScript, empacotado por Vite, estilização com Tailwind CSS, formulários com react-hook-form + Zod (+ @hookform/resolvers) e roteamento com @tanstack/react-router.",
    github: "https://github.com/pablotq/syntax-wear-app"
  },
  todoList: {
    titulo: "Todo List - Lista de tarefas",
    imagem: "src/imagens/todo-list.jpg",
    descricao: "Este projeto é uma lista de tarefas simples.",
    link: "https://todolist-app-one-xi.vercel.app",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    detalhes: "Esse projeto foi desenvolvido usando Context API para definir os temas, salvando o tema e lista no armazenamento local, e usando hook personalizado para as funções da lista",
    github: "https://github.com/pablotq/todolist-app"
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
    if (projetoData.link === "") {
      modalLink.classList.add('hidden'); 
    } else {
      modalLink.classList.remove('hidden');
      modalLink.href = projetoData.link;
    }
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