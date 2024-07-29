'use client'
import G5lLogo from '@/icons/g5l-logo.svg'
// import IconMenu from '@/icons/icon-menu.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderDiv, Menu, MenuItem } from './styles'

interface Props {
	$isHome: boolean;
}

const Header = ({ $isHome }: Props) => {
	const pathname = usePathname()
	const isActive = (href: string): boolean => {
		return pathname.includes(href)
	}

	const items = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/now', label: 'Now' }
	]

	return (
		<HeaderDiv $isHome={$isHome}>
			<Link href="/" passHref>
				<G5lLogo className="logo" />
			</Link>
			{/*<IconMenu className="hamburger-menu" />*/}
			<Menu>
				{/*<MenuItem href="/">Blog</MenuItem>*/}
				{items.map(({ href, label }) => (
					<MenuItem key={href} href={href} $isActive={isActive(href)}>{label}</MenuItem>
				))}
			</Menu>
		</HeaderDiv>
	)
}

export default Header
