import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/contactManager'
import { useState } from 'react'

const Contact = () => {
  const { items } = useSelector((state: RootReducer) => state.contatos)
  const contatos = items

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      {contatos.map((contato) => {
        const { id, nome, email, telefone } = contato
        return (
          <S.Card key={id}>
            <S.Label htmlFor="">Nome: </S.Label>
            <S.Input type="text" value={nome} readOnly />
            <S.Label htmlFor="">E-mail: </S.Label>
            <S.Input type="text" value={email} readOnly />
            <S.Label htmlFor="">Número: </S.Label>
            <S.Input type="text" value={telefone} readOnly />
            <S.EditButton>Editar</S.EditButton>
            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveButton>
          </S.Card>
        )
      })}
    </>
  )
}

export default Contact
