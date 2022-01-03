import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b331b163dfmsh17d3214f4e61243p14cc42jsn550b3d139b49',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  
  reducerPath: 'cryptoApi',
  
  baseQuery: fetchBaseQuery({ baseUrl }),
  
  endpoints: (builder) => ({
    getCryptos: builder.query({
      
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi
