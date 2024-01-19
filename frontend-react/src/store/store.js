import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/api/pokemon'

export const store = configureStore({
  reducer: { 
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counterReducer
 },
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)