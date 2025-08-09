export class RestaurantIten {
  name: string
  description: string
  image: string

  constructor(name: string, description: string, image: string) {
    this.name = name
    this.description = description
    this.image = image
  }
}

class RestaurantPage {
  infos: string[]
  name: string
  background: string
  itens: RestaurantIten[]
  link: string

  constructor(
    infos: string[],
    name: string,
    background: string,
    itens: RestaurantIten[],
    link: string
  ) {
    this.infos = infos
    this.name = name
    this.background = background
    this.itens = itens
    this.link = link
  }
}

export default RestaurantPage
