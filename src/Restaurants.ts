import RestaurantsPage from './models/RestaurantPage'
import LaDolceVitaTrattoria from './assets/images/fundo-La-Dolce-Vita-Trattoria.png'
import pizza from './assets/images/pizza.png'
import Restaurants from './models/Restaurant'
import Sushi from './assets/images/Sushi.png'
import Macarrao from './assets/images/Macarrao.png'

export const RestaurantesPages: RestaurantsPage[] = [
  {
    infos: ['Destaque da Semana |', ' Japonês'],
    name: 'Hioki Sushi',
    background: ' ',
    link: '/Hioki-Sushi',
    itens: []
  },
  {
    infos: ['Italiana'],
    name: 'La Dolce Vita Trattoria',
    background: LaDolceVitaTrattoria,
    link: '/La-Dolce-Vita-Trattoria',
    itens: [
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      },
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      },
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      },
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      },
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      },
      {
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizza,
        name: 'Pizza Margherita'
      }
    ]
  }
]

export const Restaurantes: Restaurants[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da Semana', 'Japonês'],
    image: Sushi,
    rank: 4.9,
    link: '/Hioki-Sushi'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rank: 4.6,
    image: Macarrao,
    link: '/La-Dolce-Vita-Trattoria'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rank: 4.6,
    image: Macarrao,
    link: '/La-Dolce-Vita-Trattoria'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rank: 4.6,
    image: Macarrao,
    link: '/La-Dolce-Vita-Trattoria'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rank: 4.6,
    image: Macarrao,
    link: '/La-Dolce-Vita-Trattoria'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rank: 4.6,
    image: Macarrao,
    link: '/La-Dolce-Vita-Trattoria'
  }
]
