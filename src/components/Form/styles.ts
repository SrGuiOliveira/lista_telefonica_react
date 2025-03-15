import styled from 'styled-components'
import { Input, Card, Label } from '../Contact/styles'

export const CardForm = styled(Card)``
export const LabelForm = styled(Label)`
  font-weight: bold;
`
export const InputForm = styled(Input)`
  background-color: #fff;
  border: 1px solid black;

  &::placeholder {
    font-size: 12px;
    text-align: center;
    color: black;
    opacity: 0.2;
  }
`
