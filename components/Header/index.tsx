'use client'
import G5lLogo from '@/icons/g5l-logo.svg'
import IconMenu from '@/icons/icon-menu.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderDiv, Menu, MenuItem } from './styles'

interface Props {
	isHome: boolean;
}

const Header = ({ isHome }: Props) => {
	const pathname = usePathname()
	const isActive = (href: string): boolean => {
		return pathname === href
	}

	return (
		<HeaderDiv isHome={isHome}>
			<Link href="/" passHref>
				<G5lLogo className="logo" />
			</Link>
			{/*<IconMenu className="hamburger-menu" />*/}
			<Menu>
				{/*<MenuItem href="/">Blog</MenuItem>*/}
				<MenuItem href="/projects" active={isActive('/projects')}>Projects</MenuItem>
			</Menu>
		</HeaderDiv>
	)
}

export default Header
