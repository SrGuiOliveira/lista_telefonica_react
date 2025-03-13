import { Header, Icon, Section, Title } from './styles'
import contacList from '../../icon/contact-list.png'
import Contact from '../../components/Contact'

const List = () => {
  return (
    <>
      <Header>
        <Icon src={contacList}></Icon>
        <Title>Lista Telefônica</Title>
      </Header>
      <Section>
        <Contact />
      </Section>
    </>
  )
}

export default List
