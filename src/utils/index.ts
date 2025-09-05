export const priceFormater = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: RestaurantIten[]) => {
  return items.reduce((acc, i) => {
    if (i.preco) {
      return (acc += i.preco)
    }
    return 0
  }, 0)
}
