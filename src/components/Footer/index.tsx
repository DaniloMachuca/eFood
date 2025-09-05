import Logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <img src={Logo} alt="eFood" />
      <S.SocialMedias>
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={insta} alt="insta" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
      </S.SocialMedias>
      <S.Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Description>
    </S.Footer>
  )
}

export default Footer
