import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contactManager'
import filtroReducer from './reducers//filter'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
