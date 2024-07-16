'use client'
import IconGithub from '@/icons/icon-github.svg'
import IconInstagram from '@/icons/icon-instagram.svg'
import IconLinkedin from '@/icons/icon-linkedin.svg'
import Link from 'next/link'
import { Content } from './styles'

const Footer = () => (
	<Content>
		<Link href="https://www.instagram.com/gabrieldebona/" target="_blank">
			<IconInstagram className="icon" />
		</Link>
		<Link href="https://www.linkedin.com/in/gabrieldebona/" target="_blank">
			<IconLinkedin className="icon" />
		</Link>
		<Link href="https://github.com/g5l" target="_blank">
			<IconGithub className="icon" />
		</Link>
	</Content>
)

export default Footer
