'use client'
import ProjectPreview from '@/components/ProjectPreview'
import { Main } from './styles'

const Projects = () => (
	<Main>
		<ProjectPreview
			title="Veganhive"
			description="A social network for vegans with a marketplace and custom map to find restaurants and stores"
			className="project"
			skills={['React', 'Typescript', 'Neo4j', 'Cypress', 'Neo4j']}
			link="https://veganhive.com/"
		/>

		<ProjectPreview
			title="Wedy"
			description="A platform and social network to facilitates the wedding planning process from engagement"
			className="project"
			skills={['Vue.js', 'Javascript', 'Ruby on Rails', 'Cypress']}
			link="https://wedy.com.br/"
		/>
		
		<ProjectPreview
			title="Agacor Website"
			description="A website with content management system built in Wordpress"
			className="project"
			skills={['Wordpress', 'PHP', 'CSS']}
			link="https://agacor.com.br/"
		/>
w
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
			skills={['VueJS', 'Javascript', 'NodeJS', 'Sequelize']}
		/>
	</Main>
)

export default Projects
