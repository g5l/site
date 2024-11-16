'use client'

import { Content, Head, List, ListItem, SubTitle, Title } from '@/app/now/styles'

const Home = () => {
	return (
		<Content>
			<Head>
				<Title>What am I doing?</Title>
				<p>Updated July 29th, from my flat in Porto Alegre, Brazil.</p>
			</Head>
			<p>
				I'm currently looking for a job.
			</p>
			<p>
				While I'm looking for companies, I'm developing two projects:
			</p>
			<List>
				<ListItem>
					An automatic post creator for Wordpress articles with CrewAI
				</ListItem>
				<ListItem>
					A digital platform that helps people find places to work remotely, such as cafes and pubListItemc spaces with Wi-Fi.
				</ListItem>
			</List>

			<SubTitle>What are my current interests?</SubTitle>
			<p>
				I'm currently interested in learning more about the following topics:
			</p>
			<List>
				<ListItem>
					Frontend Development and Software Architecture
				</ListItem>
				<ListItem>
					Machine Learning
				</ListItem>
				<ListItem>
					AI Agents, CrewAI framework and Python
				</ListItem>
			</List>

			<SubTitle>Health</SubTitle>
			<p>
				Working on physical and mental health. I’m in pretty good shape in both areas, but there is certainly room for improvement.
				Really digging into improve my productivity, meditation, and being more intentional about what I eat and drink.
			</p>
		</Content>
	)
}

export default Home
