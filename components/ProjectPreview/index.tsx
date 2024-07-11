import IconVisit from '@/icons/icon-visit.svg'
import React from 'react'
import { ActionButtonsContent, BottomContent, Content, Desc, SkillsContent, Title, VisitButton } from './styles'

interface Props {
	title: string
	description: string,
	skills: string[],
	link?: string
	className?: string
}

const CTAButton = ({ text, icon, link }: { text: string, icon?: React.JSX.Element, link?: string }) => (
	<VisitButton href={link} target="__blank">
		{text}
		{icon && icon}
	</VisitButton>
)

const Skills = ({ items }: { items: string[] }) => (
	<SkillsContent>
		<strong>Skills:</strong> {items && items.join(', ')}
	</SkillsContent>
)

const ProjectPreview = ({ title, description, skills, link, className }: Props) => (
	<Content className={className}>
		<Title>{title}</Title>
		<Desc>{description}</Desc>
		<BottomContent>
			<Skills items={skills} />
			<ActionButtonsContent>
				{link && <CTAButton link={link} text="Visit" icon={<IconVisit />} />}
				{/*<CTAButton text="Read more" />*/}
			</ActionButtonsContent>
		</BottomContent>
	</Content>
)

export default ProjectPreview
