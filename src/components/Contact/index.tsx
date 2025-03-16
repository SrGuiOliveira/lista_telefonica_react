import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import * as S from './styles'
import { Button, CancelRemoveButton, SaveButton } from '../../styles'
import { RootReducer } from '../../store'
import { remove, edit } from '../../store/reducers/contactManager'
import { validateContact } from '../../utils/validators'

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

  const getPhoneMask = (telefone: string) => {
    return telefone.length <= 10 ? '(99) 9999-9999' : '(99) 99999-9999'
  }

  return (
    <>
      {filterContacts().map((contato) => {
        const { id, nome, email, telefone } = contato
        return (
          <S.Card key={id}>
            <S.ResponsiveDiv>
              <div>
                <S.Label htmlFor={'nome'}>Nome: </S.Label>
                <S.Input
                  id={'nome'}
                  type="text"
                  value={
                    isEditing && contactData.id === id ? contactData.nome : nome
                  }
                  onChange={(e) =>
                    setContactData({ ...contactData, nome: e.target.value })
                  }
                  disabled={!isEditing || contactData.id !== id}
                />
              </div>
              <S.Label htmlFor={'email'}>E-mail: </S.Label>
              <S.Input
                id={'email'}
                type="text"
                value={
                  isEditing && contactData.id === id ? contactData.email : email
                }
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
                disabled={!isEditing || contactData.id !== id}
              />
              <S.Label htmlFor={'telefone'}>Número: </S.Label>
              <InputMask
                mask={getPhoneMask(
                  isEditing && contactData.id === id
                    ? contactData.telefone
                    : telefone.toString()
                )}
                value={
                  isEditing && contactData.id === id
                    ? contactData.telefone
                    : telefone.toString()
                }
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  setContactData({
                    ...contactData,
                    telefone: value
                  })
                }}
                readOnly={!isEditing || contactData.id !== id}
              >
                {(inputProps) => (
                  <S.Input {...inputProps} type="tel" id="telefone" />
                )}
              </InputMask>
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
