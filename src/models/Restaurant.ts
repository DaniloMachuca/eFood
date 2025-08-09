class Restaurants {
  title: string
  image: string
  description: string
  infos: string[]
  id: number
  rank: number
  link: string

  constructor(
    title: string,
    description: string,
    image: string,
    infos: string[],
    id: number,
    rank: number,
    link: string
  ) {
    this.title = title
    this.description = description
    this.infos = infos
    this.id = id
    this.rank = rank
    this.image = image
    this.link = link
  }
}

export default Restaurants
