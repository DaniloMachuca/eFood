import Logo from '../../assets/images/logo.png'
import HeroImg from '../../assets/images/fundo.png'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Container style={{ backgroundImage: `url(${HeroImg})` }}>
      <img src={Logo} alt="eFood" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.Container>
  )
}

export default Hero
