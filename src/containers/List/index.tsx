import { useDispatch, useSelector } from 'react-redux'
import { Header, Icon, SearchBar, Title } from './styles'
import { Section } from '../../styles'
import contacList from '../../icon/contact-list.png'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const List = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <Header>
        <Icon src={contacList}></Icon>
        <Title>Lista Telefônica</Title>
      </Header>
      <SearchBar
        placeholder="Buscar contato(s)"
        value={term}
        onChange={(event) => dispatch(changeTerm(event.target.value))}
      />
      <Section>
        <Contact />
      </Section>
    </>
  )
}

export default List
