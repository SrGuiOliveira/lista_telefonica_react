import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { Button, CancelRemoveButton, SaveButton } from '../../styles'
import { RootReducer } from '../../store'
import { remove, edit } from '../../store/reducers/contactManager'
import { useState } from 'react'

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

  const filterContacts = () => {
    return contatos.filter(
      (item) =>
        item.nome.toLowerCase().includes(term.toLowerCase()) ||
        item.telefone.toString().includes(term) || // Convert telefone to string
        item.email.toLowerCase().includes(term.toLowerCase())
    )
  }

  return (
    <>
      {filterContacts().map((contato) => {
        const { id, nome, email, telefone } = contato
        return (
          <S.Card key={id}>
            <S.Label htmlFor={`nome-${id}`}>Nome: </S.Label>
            <S.Input
              id={`nome-${id}`}
              type="text"
              value={
                isEditing && contactData.id === id ? contactData.nome : nome
              }
              onChange={(e) =>
                setContactData({ ...contactData, nome: e.target.value })
              }
              disabled={!isEditing || contactData.id !== id}
            />
            <S.Label htmlFor={`email-${id}`}>E-mail: </S.Label>
            <S.Input
              id={`email-${id}`}
              type="text"
              value={
                isEditing && contactData.id === id ? contactData.email : email
              }
              onChange={(e) =>
                setContactData({ ...contactData, email: e.target.value })
              }
              disabled={!isEditing || contactData.id !== id}
            />
            <S.Label htmlFor={`telefone-${id}`}>Número: </S.Label>
            <S.Input
              id={`telefone-${id}`}
              type="tel"
              value={
                isEditing && contactData.id === id
                  ? contactData.telefone
                  : telefone.toString()
              }
              onChange={(e) => {
                const value = e.target.value
                if (/^\d*$/.test(value)) {
                  setContactData({
                    ...contactData,
                    telefone: value
                  })
                }
              }}
              disabled={!isEditing || contactData.id !== id}
            />
            {isEditing && contactData.id === id ? (
              <>
                <SaveButton
                  onClick={() => {
                    dispatch(
                      edit({
                        ...contactData,
                        telefone: Number(contactData.telefone)
                      })
                    )
                    setIsEditing(false)
                  }}
                >
                  Salvar
                </SaveButton>
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
          </S.Card>
        )
      })}
    </>
  )
}

export default Contact
