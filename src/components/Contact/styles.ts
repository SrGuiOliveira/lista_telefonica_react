import styled from 'styled-components'

export const Card = styled.div`
  background-color: #eee;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 16px;
`
export const Label = styled.label`
  font-weight: lighten;
  font-size: 12px;
`
export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: bold;
  &::placeholder {
    opacity: 0;
  }
`
