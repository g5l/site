import IconGithub from '@/icons/icon-github.svg'
import IconInstagram from '@/icons/icon-instagram.svg'
import IconLinkedin from '@/icons/icon-linkedin.svg'
import { FooterDiv } from './styles'

interface Props {
	isHome: boolean;
	className: string;
}

const Footer = ({ isHome, className }: Props) => (
	<FooterDiv isHome={isHome} className={className}>
		<a href="https://www.instagram.com/gabrieldebona/" target="_blank">
			<IconInstagram className="icon" />
		</a>
		<a href="https://www.linkedin.com/in/gabrieldebona/" target="_blank">
			<IconLinkedin className="icon" />
		</a>
		<a href="https://github.com/g5l" target="_blank">
			<IconGithub className="icon" />
		</a>
	</FooterDiv>
)

export default Footer
