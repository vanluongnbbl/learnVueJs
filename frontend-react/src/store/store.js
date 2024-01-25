import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getPokemonApi } from '../services/api/pokemon'

export const store = configureStore({
  reducer: { 
    [getPokemonApi.reducerPath]: getPokemonApi.reducer,
    counterReducer
 },
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware().concat(getPokemonApi.middleware),
})

setupListeners(store.dispatch)