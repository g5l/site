'use client'
import ProjectPreview from '@/components/ProjectPreview'
import { Main } from './styles'

const Projects = () => (
	<Main>
		<ProjectPreview
			title="Agacor Website"
			description="A website with content management system built in Wordpress"
			className="project"
			skills={['Wordpress', 'PHP', 'CSS']}
			link="https://agacor.com.br/"
		/>

		<ProjectPreview
			title="Agacor Content Agency"
			description="A agency crew built to automate the content creation process on the blog's website. This project automatically searches for content and creates a formatted blog post"
			className="project"
			skills={['Python', 'CrewAI', 'Machine Learning', 'Artificial Intelligence']}
		/>

		<ProjectPreview
			title="Catalog"
			description="I built a full project (Design, API, Inteface, Backend) to sell for to sell to jewelry companies as a virtual catalog"
			className="project"
			skills={['VueJS', 'NodeJS', 'Sequelize']}
		/>
	</Main>
)

export default Projects
