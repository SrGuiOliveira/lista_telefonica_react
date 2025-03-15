import styled, { createGlobalStyle } from 'styled-components'
import _var from './var' // Ensure your gradient is properly defined in this file

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

  }

body {
  height: 100vh;
  background: linear-gradient(180deg, ${_var.gradient.join(', ')});
  background-repeat: no-repeat;
  background-size: cover;
}
  button: hover {
    filter: brightness(130%);
  }
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.button`
  background-color: orange;
  padding: 8px;
  border-radius: 2px;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
export const SaveButton = styled(Button)`
  background-color: green;
`
export const CancelRemoveButton = styled(Button)`
  background-color: red;
`
export const Section = styled.section`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  width: 1000px;
  height: 60vh;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.315);
  overflow-y: auto;
`

export default GlobalStyle
