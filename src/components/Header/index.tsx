import * as S from './styles'
import Logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${Fundo})` }}>
      <div className="container">
        <S.HeaderList>
          <S.Links to={'/'}>Restaurantes</S.Links>
          <img src={Logo} alt="eFood" />
          <S.Links to={'/'}>0 produto(s) no carrinho</S.Links>
        </S.HeaderList>
      </div>
    </div>
  )
}

export default Header
