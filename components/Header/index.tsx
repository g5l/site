import IconMenu from 'icons/icon-menu.svg';
import G5lLogo from 'images/g5l-logo.svg';
import Link from 'next/link';
import {HeaderDiv, Menu, MenuItem} from './styles';

interface Props {
  intern: boolean;
}

const Header = ({intern}: Props) => (
  <HeaderDiv intern={intern}>
    <Link href="/" passHref>
      <G5lLogo className="logo"/>
    </Link>
    <IconMenu className="hamburger-menu"/>
    <Menu>
      {/* <Link href="/Blog" passHref> */}
      <MenuItem>Blog</MenuItem>
      {/* </Link> */}
      <MenuItem>Portfolio</MenuItem>
    </Menu>
  </HeaderDiv>
);

export default Header;
