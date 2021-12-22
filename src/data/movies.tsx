const Movies = [
  {
    id: 3,
    title: 'Guerra Infinita',
    image: require('../images/movies/infinity-war.jpg'),
    description: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. ",
    rating: 5,
    characters: [
      { 
        title: "Thanos",
        image: require("../images/characters/thanos.jpg")
      },
      {  
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
      {  
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
      {  
        title: "Viúva Negra",
        image: require("../images/characters/black-widow.jpg")
      },
      {  
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
      {  
        title: "Gavião Arqueiro",
        image: require("../images/characters/hawkeye.jpg")
      },
      { 
        title: "Homem Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 1,
    title: "Era de Ultron",
    image: require('../images/movies/ultron.jpg'),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem de ferro",
        image: require("../images/characters/iron-man.jpg")
      },
      {  
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
      {  
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
      {  
        title: "Viúva Negra",
        image: require("../images/characters/black-widow.jpg")
      },
      {  
        title: "Gavião Arqueiro",
        image: require("../images/characters/hawkeye.jpg")
      },
      {  
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
      {  
        title: "Ultron",
        image: require("../images/characters/ultron.jpg")
      },
      { 
        title: "Homem Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 2,
    title: 'Guerra Civil',
    image: require('../images/movies/civil-war.jpg'),
    description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    rating: 4,
    characters: [
      {  
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
      {  
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
      {  
        title: "Viúva Negra",
        image: require("../images/characters/black-widow.jpg")
      },
      {  
        title: "Gavião Arqueiro",
        image: require("../images/characters/hawkeye.jpg")
      },
      { 
        title: "Homem de ferro",
        image: require("../images/characters/iron-man.jpg")
      },
      { 
        title: "Homem Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 4,
    title: 'Ultimato',
    image: require('../images/movies/endgame.jpg'),
    description: "",
    rating: 4,
    characters: [
      {  
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
      {  
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
      {  
        title: "Viúva Negra",
        image: require("../images/characters/black-widow.jpg")
      },
      { 
        title: "Thanos",
        image: require("../images/characters/thanos.jpg")
      },
      {  
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
      {  
        title: "Gavião Arqueiro",
        image: require("../images/characters/hawkeye.jpg")
      },
      { 
        title: "Homem Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
      {
        title: "Homem De Ferro",
        image: require("../images/characters/iron-man.jpg")
      }
    ]
  },
  {
    id: 5,
    title: 'WandaVision',
    image: require('../images/movies/wandavision.jpeg'),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Wanda",
        image: require("../images/characters/wanda.jpg")
      },
      {
        title: "Vision",
        image: require("../images/characters/vision.jpg")
      }
    ]
  },
  {
    id: 6,
    title: 'Thor',
    image: require('../images/movies/thor.jpg'),
    description: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
    rating: 4.8,
    characters: [
      { 
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
    ]
  },
  {
    id: 7,
    title: 'Capitão America',
    image: require('../images/movies/captain-america.jpg'),
    description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
    rating: 4.9,
    characters: [
      { 
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
    ]
  },
  {
    id: 8,
    title: 'Homem de ferro',
    image: require('../images/movies/iron-man.jpg'),
    description: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado...",
    rating: 4,
    characters: [
      { 
        title: "Homem de ferro",
        image: require("../images/characters/iron-man.jpg")
      },
    ]
  },
  {
    id: 9,
    title: 'Homem de ferro 2',
    image: require('../images/movies/iron-man2.png'),
    description: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro....",
    rating: 4,
    characters: [
      { 
        title: "Capitão America",
        image: require("../images/characters/iron-man.jpg")
      },
    ]
  },
  {
    id: 10,
    title: "Doutor Estranho",
    image: require("../images/movies/doctor-strange.jpg"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Doutor Estranho",
        image: require("../images/characters/doctor-strange.jpg")
      },
    ]
  },
  {
    id: 11,
    title: "Thor: Ragnarok",
    image: require("../images/movies/thor-ragnarok.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
      { 
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
    ]
  },
  {
    id: 12,
    title: "Homem-Aranha: Sem Volta para Casa",
    image: require("../images/movies/no-way-home.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem-Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 13,
    title: "Homem-Formiga",
    image: require("../images/movies/ant-man.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem-Formiga",
        image: require("../images/characters/ant-man.png")
      },
    ]
  },
  {
    id: 14,
    title: "Homem Aranha: De Volta ao Lar",
    image: require("../images/movies/home-comming.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem-Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 15,
    title: "Homem-Aranha: Longe de Casa",
    image: require("../images/movies/far-for-home.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem-Aranha",
        image: require("../images/characters/spider-man.jpg")
      },
    ]
  },
  {
    id: 16,
    title: "O Incrível Hulk",
    image: require("../images/movies/incredible-hulk.jpg"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
    ]
  },
  {
    id: 18,
    title: "Homem de Ferro 3",
    image: require("../images/movies/iron-man3.jpg"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem de ferro",
        image: require("../images/characters/iron-man.jpg")
      },
    ]
  },
  {
    id: 19,
    title: "Capitão América 2 - O Soldado Invernal",
    image: require("../images/movies/the-winter-soldier.jpg"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Capitão America",
        image: require("../images/characters/iron-man.jpg")
      },
    ]
  },
  {
    id: 20,
    title: "Os Vingadores",
    image: require("../images/movies/avengers.png"),
    description: "",
    rating: 4,
    characters: [
      { 
        title: "Homem de ferro",
        image: require("../images/characters/iron-man.jpg")
      },
      {  
        title: "Thor",
        image: require("../images/characters/thor.jpg")
      },
      {  
        title: "Hulk",
        image: require("../images/characters/hulk.png")
      },
      {  
        title: "Viúva Negra",
        image: require("../images/characters/black-widow.jpg")
      },
      {  
        title: "Gavião Arqueiro",
        image: require("../images/characters/hawkeye.jpg")
      },
      {  
        title: "Capitão America",
        image: require("../images/characters/captain-america.jpg")
      },
    ]
  },
  {
    id: 21,
    title: "Guardiões da Galáxia",
    image: require("../images/movies/guardians-of-the-galaxy.jpg"),
    description: "",
    rating: 4,
    characters: []
  },
]

export default Movies;
