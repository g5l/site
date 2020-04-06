import { HeaderDiv } from './styles'
import G5lLogo from 'images/g5l-logo.svg'
import IconMenu from 'icons/icon-menu.svg'

const Header = (props) => (
  <HeaderDiv intern={props.intern}>
    <G5lLogo />
    <IconMenu />
  </HeaderDiv>
)

export default Header
