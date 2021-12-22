const Characters = [
  {
    id: 1,
    title: "Wanda Maximoff",
    image: require('../images/characters/wanda.jpg'),
    description: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. ',
    rating: 4,
    moviesApparitions: [
      {
        title: 'Avengers age of ultron',
        image: require('../images/movies/ultron.jpg'),
      },
      {
        title: 'Captain America: Civil War',
        image: require('../images/movies/civil-war.jpg'),
      },
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
      {
        title: 'WandaVision',
        image: require('../images/movies/wandavision.jpeg'),
      }
    ]
  },
  {
    id: 2,
    title: "Vision",
    image: require('../images/characters/vision.jpg'),
    description: "Visão gradualmente recupera suas emoções, adotando novos padrões cerebrais do falecido cientista Alex Lipton, e ganha um novo corpo que se assemelha ao seu original.",
    rating: 3.9,
    moviesApparitions: [
      {
        title: 'Avengers age of ultron',
        image: require('../images/movies/ultron.jpg'),
      },
      {
        title: 'Captain America: Civil War',
        image: require('../images/movies/civil-war.jpg'),
      },
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'WandaVision',
        image: require('../images/movies/wandavision.jpeg'),
      }
    ]
  },
  {
    id: 3,
    title: "Doctor Strange",
    image: require('../images/characters/doctor-strange.jpg'),
    description: "Stephen Vincent Strange, o Mago Supremo ou Mestre da Magia, é um dos mais diferentes super-heróis do Universo Marvel, criado pelo roteirista Stan Lee junto com o desenhista Steve Ditko em 1963.",
    rating: 3.8,
    moviesApparitions: [
      {
        title: "Doutor Estranho",
        image: require("../images/movies/doctor-strange.jpg"),
      },
      {
        title: "Thor: Ragnarok",
        image: require("../images/movies/thor-ragnarok.png"),
      },
      {
        title: "Homem-Aranha: Sem Volta para Casa",
        image: require("../images/movies/no-way-home.png"),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 4,
    title: "Homem-Aranha",
    image: require('../images/characters/spider-man.jpg'),
    description: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Homem de ferro 2',
        image: require('../images/movies/iron-man2.png'),
      },
      {
        title: "Homem-Aranha: Sem Volta para Casa",
        image: require("../images/movies/no-way-home.png"),
      },
      {
        title: "Homem-Formiga",
        image: require("../images/movies/ant-man.png"),
      },
      {
        title: "Homem Aranha: De Volta ao Lar",
        image: require("../images/movies/home-comming.png"),
      },
      {
        title: "Homem-Aranha: Longe de Casa",
        image: require("../images/movies/far-for-home.png"),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
      {
        title: 'Captain America: Civil War',
        image: require('../images/movies/civil-war.jpg'),
      },
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
    ]
  },
  {
    id: 5,
    title: "Hulk",
    image: require('../images/characters/hulk.png'),
    description: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner',
    rating: 3.8,
    moviesApparitions: [
      {
        title: "O Incrível Hulk",
        image: require("../images/movies/incredible-hulk.jpg"),
      },
      {
        title: "Thor",
        image: require("../images/movies/thor.jpg"),
      },
      {
        title: "Homem de Ferro 3",
        image: require("../images/movies/iron-man3.jpg"),
      },
      {
        title: "Capitão América 2 - O Soldado Invernal",
        image: require("../images/movies/the-winter-soldier.jpg"),
      },
      {
        title: "Os Vingadores",
        image: require("../images/movies/avengers.png"),
      },
      {
        title: 'Avengers age of ultron',
        image: require('../images/movies/ultron.jpg'),
      },
      {
        title: 'Captain America: Civil War',
        image: require('../images/movies/civil-war.jpg'),
      },
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 6,
    title: "Captain Marvel",
    image: require('../images/characters/captain-marvel.jpg'),
    description: "Meu nome é Capitã Marvel... Eu sou um Terráquea e uma Vingadora. Mas hoje eu estou junto com os colonos de Torfa, que reivindicaram este planeta e seus recursos, que foram livremente dados após a catástrofe do Behemoth...",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 7,
    title: "Thanos",
    image: require('../images/characters/thanos.jpg'),
    description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. ",
    rating: 3.8,
    moviesApparitions: [
      {
        title: "Guardiões da Galáxia",
        image: require("../images/movies/guardians-of-the-galaxy.jpg"),
      },
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 8,
    title: "Thor",
    image: require('../images/characters/thor.jpg'),
    description: "Em várias histórias Thor Odinson enfrenta divindades de outras mitologias.",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 9,
    title: "Capitão América",
    image: require('../images/characters/captain-america.jpg'),
    description: "Steve Rogers era um rapaz com problemas de saúde que desejava, de qualquer forma, participar dos esforços estadunidenses para vencer a Segunda Guerra Mundial.",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 10,
    title: "Viúva Negra",
    image: require('../images/characters/black-widow.jpg'),
    description: "Tendo sido concedida anistia, Natasha fez uma proposta para se unir aos Vingadores, ajudando-os em sua batalha contra os Ultroids. ",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 11,
    title: "Gavião Arqueiro",
    image: require('../images/characters/hawkeye.jpg'),
    description: "Iniciou sua carreira como vilão do Homem de Ferro e nessa época se envolveu com a Viúva Negra, mas o relacionamento fracassou.",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 12,
    title: "Ultron",
    image: require('../images/characters/ultron.jpg'),
    description: "Iniciou sua carreira como vilão do Homem de Ferro e nessa época se envolveu com a Viúva Negra, mas o relacionamento fracassou.",
    rating: 3.8,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
    ]
  },
  {
    id: 13,
    title: "Homem De Ferro",
    image: require('../images/characters/iron-man.jpg'),
    description: "Stark desenvolveu novas versões de sua armadura e adotou as cores vermelho e dourado como as padrões da armadura.",
    rating: 5,
    moviesApparitions: [
      {
        title: 'Avengers: Infinity War',
        image: require('../images/movies/infinity-war.jpg'),
      },
      {
        title: 'Avengers: Endgame',
        image: require('../images/movies/endgame.jpg'),
      },
      {
        title: 'Homem de ferro',
        image: require('../images/movies/iron-man.jpg'),
      },
      {
        title: 'Homem de ferro 2',
        image: require('../images/movies/iron-man2.png'),
      },
      {
        title: "Homem de Ferro 3",
        image: require("../images/movies/iron-man3.jpg"),
      },
      {
        title: 'Captain America: Civil War',
        image: require('../images/movies/civil-war.jpg'),
      },
    ]
  },
  {
    id: 14,
    title: "Homem-Formiga",
    image: require('../images/characters/ant-man.png'),
    description: "Em 1989, o Homem-Formiga original, Hank Pym, demite-se da S.H.I.E.L.D. depois de descobrir que a organização tentou duplicar...",
    rating: 3.5,
    moviesApparitions: [
      {
        title: 'Homem-Formiga',
        image: require('../images/movies/ant-man.png'),
      },
    ]
  },
];

export default Characters;
