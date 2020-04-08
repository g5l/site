import Link from 'next/link'
import G5lLogo from 'images/g5l-logo.svg'
import IconMenu from 'icons/icon-menu.svg'
import { HeaderDiv, Menu, MenuItem } from './styles'

const Header = (props) => (
  <HeaderDiv intern={props.intern}>
    <Link href="/" passHref>
      <G5lLogo className="logo" />
    </Link>
    <IconMenu className="hamburger-menu" />
    <Menu>
      <Link href="/Blog" passHref>
        <MenuItem>Blog</MenuItem>
      </Link>
      <MenuItem>Portfólio</MenuItem>
      <MenuItem>Contato</MenuItem>
    </Menu>
  </HeaderDiv>
)

export default Header
