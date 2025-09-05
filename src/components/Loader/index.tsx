import { BarLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <BarLoader color={colors.salmon} />
    </Container>
  )
}

export default Loader
