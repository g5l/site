import { FooterDiv } from './styles'
import IconGithub from 'icons/icon-github.svg'
import IconLinkedin from 'icons/icon-linkedin.svg'
import IconInstagram from 'icons/icon-instagram.svg'

const Footer = () => (
  <FooterDiv intern>
    <IconInstagram className="icon" />
    <IconLinkedin className="icon" />
    <IconGithub className="icon" />
  </FooterDiv>
)

export default Footer
