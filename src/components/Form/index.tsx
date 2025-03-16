import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { register } from '../../store/reducers/contactManager'
import { CardForm, LabelForm, InputForm } from './styles'
import { SaveButton } from '../../styles'
import { RootReducer } from '../../store'
import { validateContact } from '../../utils/validators'

const Form = () => {
  const { items } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const registerNewContact = (event: FormEvent) => {
    event.preventDefault()

    const validationError = validateContact(nome, telefone, items)

    if (validationError) {
      alert(validationError)
      return
    }

    dispatch(
      register({
        nome,
        email,
        telefone: Number(telefone)
      })
    )
    navigate('/')
  }

  return (
    <>
      <form onSubmit={registerNewContact}>
        <CardForm>
          <LabelForm htmlFor="nome">Nome: </LabelForm>
          <InputForm
            id="nome"
            name="nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome do contato"
            autoComplete="name"
          />
          <LabelForm htmlFor="email">E-mail: </LabelForm>
          <InputForm
            id="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="e-mail do contato"
            autoComplete="email"
          />
          <LabelForm htmlFor="telefone">Telefone: </LabelForm>
          <InputForm
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={({ target }) => {
              const value = target.value
              if (/^\d*$/.test(value)) {
                setTelefone(value)
              }
            }}
            inputMode="numeric"
            type="tel"
            placeholder="Número do contato"
            autoComplete="tel"
          />

          <SaveButton type="submit">Cadastrar</SaveButton>
        </CardForm>
      </form>
    </>
  )
}

export default Form
