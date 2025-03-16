import styled from 'styled-components'
import { Input, Card, Label } from '../Contact/styles'

export const CardForm = styled(Card)`
  @media (max-width: 1023px) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 8px;
    }
  }
`
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
