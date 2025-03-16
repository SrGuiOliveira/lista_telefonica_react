import styled from 'styled-components'
import { CancelRemoveButton } from '../../styles'

export const Card = styled.div`
  background-color: #eee;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  margin-bottom: 16px;

  @media (max-width: 1023px) {
    display: block;
    padding: 20px;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 20px;
  }
`

export const Label = styled.label`
  font-weight: lighter;
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

export const ResponsiveDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;

  @media (max-width: 1023px) {
    display: block;
    align-items: center;

    input {
      width: 100%;
    }

    button {
      margin-top: 8px;
    }

    ${CancelRemoveButton} {
      margin-left: 8px;
    }

    div {
      display: block;
      width: 100%;
    }
  }
`
