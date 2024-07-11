interface Props {
	title: string;
	description: string;
}

const Metadata = ({ title, description }: Props) => {
	return (
		<head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</head>
	)
}

export default Metadata