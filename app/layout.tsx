'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StyledComponentsRegistry from '@/lib/registry'
import { usePathname } from 'next/navigation'
import Metadata from './metadata'
import { Content, ExternalBody, InternalBody } from './styles'
import '../assets/style.css'

const metadata = {
	title: 'G5L - Senior Frontend Developer',
	description: ''
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const isHome = pathname === '/'
	const Body = isHome ? ExternalBody : InternalBody

	return (
		<html lang="en">
		<Metadata title={metadata.title} description={metadata.description} />
		<body>
		<StyledComponentsRegistry>
			<Body>
				<Header isHome={isHome} />
				<Content>{children}</Content>
				<Footer isHome={isHome} className="footer"/>
			</Body>
		</StyledComponentsRegistry>
		</body>
		</html>
	)
}

export default RootLayout