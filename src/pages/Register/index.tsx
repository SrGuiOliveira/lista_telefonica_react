import { useNavigate } from 'react-router-dom'
import Form from '../../components/Form'
import { Button, Section } from '../../styles'
import arrow from '../../icon/arrow.png'

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <Section>
        <Form />
        <Button onClick={() => navigate('/')}>
          <img src={arrow} width="25px" />
        </Button>
      </Section>
    </>
  )
}

export default Register
