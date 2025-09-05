import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ApiResponse = {
  orderId: string
}

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantPage: builder.query<Restaurants, number>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<ApiResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantPageQuery,
  usePurchaseMutation
} = api
export default api
