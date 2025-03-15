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
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexFromContact = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexFromContact >= 0) {
        state.items[indexFromContact] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactAlreadyExist = state.items.find(
        (contact) => contact.telefone === action.payload.telefone
      )

      if (contactAlreadyExist) {
        alert('Este número já existe na sua agenda!')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = tarefasSlice.actions
export default tarefasSlice.reducer
