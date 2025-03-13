import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: 11999991234
    },
    {
      id: 2,
      nome: 'Carlos Pereira',
      email: 'carlos.pereira@email.com',
      telefone: 11977779012
    },
    {
      id: 3,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      telefone: 11988885678
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remove } = tarefasSlice.actions
export default tarefasSlice.reducer
