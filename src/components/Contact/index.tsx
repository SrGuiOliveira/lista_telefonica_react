import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Button, CancelRemoveButton, SaveButton } from '../../styles'
import { RootReducer } from '../../store'
import { remove, edit } from '../../store/reducers/contactManager'
import { validateContact, applyPhoneMask } from '../../utils/validators'

const Contact = () => {
  const { items } = useSelector((state: RootReducer) => state.contatos)
  const { term } = useSelector((state: RootReducer) => state.filtro)

  const contatos = items

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [contactData, setContactData] = useState({
    id: 0,
    nome: '',
    email: '',
    telefone: ''
  })

  function cancelEditing() {
    setIsEditing(false)
    setContactData({
      id: 0,
      nome: '',
      email: '',
      telefone: ''
    })
  }

  function EditContact() {
    const isUnchanged =
      contactData.nome ===
        items.find((item) => item.id === contactData.id)?.nome &&
      contactData.email ===
        items.find((item) => item.id === contactData.id)?.email &&
      contactData.telefone ===
        items.find((item) => item.id === contactData.id)?.telefone.toString()

    if (isUnchanged) {
      setIsEditing(false)
      return
    }

    const validationError = validateContact(
      contactData.nome,
      contactData.telefone,
      items
    )

    if (validationError) {
      alert(validationError)
      return
    }

    dispatch(
      edit({
        ...contactData,
        telefone: Number(contactData.telefone.replace(/\D/g, ''))
      })
    )
    setIsEditing(false)
  }

  const filterContacts = () => {
    return contatos.filter(
      (item) =>
        item.nome.toLowerCase().includes(term.toLowerCase()) ||
        item.telefone.toString().includes(term) ||
        item.email.toLowerCase().includes(term.toLowerCase())
    )
  }

  return (
    <>
      {filterContacts().map((contato) => {
        const { id, nome, email, telefone } = contato
        return (
          <S.Card key={id}>
            <S.ResponsiveDiv>
              <div>
                <S.Label htmlFor={`nome-${id}`}>Nome: </S.Label>
                <S.Input
                  id={`nome-${id}`}
                  name={`nome-${id}`}
                  type="text"
                  value={
                    isEditing && contactData.id === id ? contactData.nome : nome
                  }
                  onChange={(e) =>
                    setContactData({ ...contactData, nome: e.target.value })
                  }
                  readOnly={!isEditing || contactData.id !== id}
                  autoComplete="name"
                />
              </div>
              <div>
                <S.Label htmlFor={`email-${id}`}>E-mail: </S.Label>
                <S.Input
                  id={`email-${id}`}
                  name={`email-${id}`}
                  type="email"
                  value={
                    isEditing && contactData.id === id
                      ? contactData.email
                      : email
                  }
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  readOnly={!isEditing || contactData.id !== id}
                  autoComplete="email"
                />
              </div>
              <div>
                <S.Label htmlFor={`telefone-${id}`}>Telefone: </S.Label>
                <S.Input
                  id={`telefone-${id}`}
                  name={`telefone-${id}`}
                  type="tel"
                  value={
                    isEditing && contactData.id === id
                      ? applyPhoneMask(contactData.telefone || '')
                      : applyPhoneMask(telefone.toString() || '')
                  }
                  onChange={(e) => {
                    const cleanValue = e.target.value.replace(/\D/g, '')
                    setContactData({ ...contactData, telefone: cleanValue })
                  }}
                  readOnly={!isEditing || contactData.id !== id}
                  autoComplete="tel"
                />
              </div>
              {isEditing && contactData.id === id ? (
                <>
                  <SaveButton onClick={EditContact}>Salvar</SaveButton>
                  <CancelRemoveButton onClick={cancelEditing}>
                    Cancelar
                  </CancelRemoveButton>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setIsEditing(true)
                      setContactData({
                        id,
                        nome,
                        email,
                        telefone: telefone.toString()
                      })
                    }}
                  >
                    Editar
                  </Button>
                  <CancelRemoveButton onClick={() => dispatch(remove(id))}>
                    Remover
                  </CancelRemoveButton>
                </>
              )}
            </S.ResponsiveDiv>
          </S.Card>
        )
      })}
    </>
  )
}

export default Contact
