import styled, { createGlobalStyle } from 'styled-components'
import _var from './var' // Ensure your gradient is properly defined in this file

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial;
    list-style: none;
  }

body {
  height: 100vh;
  background: linear-gradient(180deg, ${_var.gradient.join(', ')});
  background-repeat: no-repeat;
  background-size: cover;
}
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default GlobalStyle
