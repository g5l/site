'use client'
import IconGithub from '@/icons/icon-github.svg'
import IconInstagram from '@/icons/icon-instagram.svg'
import IconLinkedin from '@/icons/icon-linkedin.svg'
import { Content, Social } from './styles'

const Footer = () => (
	<Content>
		<Social>
			<a href="https://www.instagram.com/gabrieldebona/" target="_blank">
				<IconInstagram className="icon" />
			</a>
			<a href="https://www.linkedin.com/in/gabrieldebona/" target="_blank">
				<IconLinkedin className="icon" />
			</a>
			<a href="https://github.com/g5l" target="_blank">
				<IconGithub className="icon" />
			</a>
		</Social>
	</Content>
)

export default Footer
