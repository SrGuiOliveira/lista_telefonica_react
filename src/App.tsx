import List from './containers/List'
import GlobalStyle, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <List />
      </Container>
    </Provider>
  )
}

export default App
