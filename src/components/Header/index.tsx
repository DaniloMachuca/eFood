import Logo from '../../assets/images/logo.png'
import HeroImg from '../../assets/images/fundo.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container style={{ backgroundImage: `url(${HeroImg})` }}>
      <h1>
        <img src={Logo} alt="eFood" />
      </h1>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.Container>
  )
}

export default Header
